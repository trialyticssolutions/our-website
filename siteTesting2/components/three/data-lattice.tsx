'use client'

import { MutableRefObject, useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { MotionValue } from 'motion/react'

/* ============================================================
   One lattice engine, three art-directed variants:
   - cloud : hero — raw data, loose constellation, scroll-rotated
   - grid  : services — the same data, structured; hover energizes columns
   - wave  : testimonials — a slow flowing stream behind the quotes
   ============================================================ */

export type LatticeVariant = 'cloud' | 'grid' | 'wave'

export interface LatticePalette {
  node: string
  signal: string
  line: string
  lineOpacity?: number
}

export const DARK_PALETTE: LatticePalette = {
  node: '#5e564d',
  signal: '#D89E3A',
  line: '#42382d',
  lineOpacity: 0.7,
}

export const LIGHT_PALETTE: LatticePalette = {
  node: '#8B8072',
  signal: '#B8842C',
  line: '#CDC1AB',
  lineOpacity: 0.85,
}

/* Deterministic RNG so server/client and every visit build the same lattice */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

interface Layout {
  nodes: THREE.Vector3[]
  scattered: THREE.Vector3[]
  edges: [number, number][]
  signal: boolean[]
  /** grid: column id per node (for hover energy); wave: [ix, iz] per node */
  groupIds?: number[]
  gridCols?: number
}

function buildCloud(): Layout {
  const rand = mulberry32(20260707)
  const nodes: THREE.Vector3[] = []
  const scattered: THREE.Vector3[] = []
  const COUNT = 130

  for (let i = 0; i < COUNT; i++) {
    const theta = rand() * Math.PI * 2
    const phi = Math.acos(2 * rand() - 1)
    const r = 2.0 + rand() * 1.1
    const v = new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi) * 0.6,
      r * Math.sin(phi) * Math.sin(theta)
    )
    nodes.push(v)
    scattered.push(
      v
        .clone()
        .multiplyScalar(1.35 + rand() * 0.5)
        .add(new THREE.Vector3((rand() - 0.5) * 1.6, (rand() - 0.5) * 1.6, (rand() - 0.5) * 1.6))
    )
  }

  const edgeSet = new Set<string>()
  const edges: [number, number][] = []
  for (let i = 0; i < COUNT; i++) {
    const nearest = nodes
      .map((n, j) => ({ j, d: i === j ? Infinity : nodes[i].distanceToSquared(n) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2)
    for (const { j } of nearest) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`
      if (!edgeSet.has(key)) {
        edgeSet.add(key)
        edges.push(i < j ? [i, j] : [j, i])
      }
    }
  }

  return { nodes, scattered, edges, signal: nodes.map((_, i) => i % 6 === 0) }
}

function buildGrid(): Layout {
  const rand = mulberry32(77)
  const NX = 8, NY = 4, NZ = 3
  const SX = 0.72, SY = 0.82, SZ = 0.85
  const nodes: THREE.Vector3[] = []
  const scattered: THREE.Vector3[] = []
  const groupIds: number[] = []
  const signal: boolean[] = []
  const index = (ix: number, iy: number, iz: number) => ix * NY * NZ + iy * NZ + iz

  for (let ix = 0; ix < NX; ix++) {
    for (let iy = 0; iy < NY; iy++) {
      for (let iz = 0; iz < NZ; iz++) {
        const v = new THREE.Vector3(
          (ix - (NX - 1) / 2) * SX + (rand() - 0.5) * 0.05,
          (iy - (NY - 1) / 2) * SY + (rand() - 0.5) * 0.05,
          (iz - (NZ - 1) / 2) * SZ + (rand() - 0.5) * 0.05
        )
        nodes.push(v)
        scattered.push(
          v
            .clone()
            .multiplyScalar(1.3)
            .add(new THREE.Vector3((rand() - 0.5) * 1.2, (rand() - 0.5) * 1.2, (rand() - 0.5) * 1.2))
        )
        groupIds.push(ix)
        signal.push(rand() < 0.1)
      }
    }
  }

  const edges: [number, number][] = []
  for (let ix = 0; ix < NX; ix++) {
    for (let iy = 0; iy < NY; iy++) {
      for (let iz = 0; iz < NZ; iz++) {
        const i = index(ix, iy, iz)
        if (ix + 1 < NX && rand() < 0.6) edges.push([i, index(ix + 1, iy, iz)])
        if (iy + 1 < NY && rand() < 0.45) edges.push([i, index(ix, iy + 1, iz)])
        if (iz + 1 < NZ && rand() < 0.4) edges.push([i, index(ix, iy, iz + 1)])
      }
    }
  }

  return { nodes, scattered, edges, signal, groupIds, gridCols: NX }
}

function buildWave(): Layout {
  const rand = mulberry32(4242)
  const NX = 16, NZ = 5
  const SX = 0.62, SZ = 0.85
  const nodes: THREE.Vector3[] = []
  const groupIds: number[] = []
  const signal: boolean[] = []
  const index = (ix: number, iz: number) => ix * NZ + iz

  for (let ix = 0; ix < NX; ix++) {
    for (let iz = 0; iz < NZ; iz++) {
      nodes.push(new THREE.Vector3((ix - (NX - 1) / 2) * SX, 0, (iz - (NZ - 1) / 2) * SZ))
      groupIds.push(ix)
      signal.push(rand() < 0.09)
    }
  }

  const edges: [number, number][] = []
  for (let ix = 0; ix < NX; ix++) {
    for (let iz = 0; iz < NZ; iz++) {
      const i = index(ix, iz)
      if (ix + 1 < NX) edges.push([i, index(ix + 1, iz)])
      if (iz + 1 < NZ && rand() < 0.22) edges.push([i, index(ix, iz + 1)])
    }
  }

  // Wave assembles in place — scattered equals nodes
  return { nodes, scattered: nodes.map((v) => v.clone()), edges, signal, groupIds }
}

const BUILDERS: Record<LatticeVariant, () => Layout> = {
  cloud: buildCloud,
  grid: buildGrid,
  wave: buildWave,
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))

function LatticeScene({
  variant,
  progress,
  palette,
  hoveredRef,
}: {
  variant: LatticeVariant
  progress?: MotionValue<number>
  palette: LatticePalette
  hoveredRef?: MutableRefObject<number | null>
}) {
  const group = useRef<THREE.Group>(null)
  const nodesMesh = useRef<THREE.InstancedMesh>(null)
  const signalsMesh = useRef<THREE.InstancedMesh>(null)
  const linesGeo = useRef<THREE.BufferGeometry>(null)

  const layout = useMemo(() => BUILDERS[variant](), [variant])
  const { nodes, scattered, edges, signal, groupIds, gridCols } = layout
  const count = nodes.length

  const plainIdx = useMemo(() => nodes.map((_, i) => i).filter((i) => !signal[i]), [nodes, signal])
  const signalIdx = useMemo(() => nodes.map((_, i) => i).filter((i) => signal[i]), [nodes, signal])
  const linePositions = useMemo(() => new Float32Array(edges.length * 6), [edges])
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const current = useMemo(() => scattered.map((v) => v.clone()), [scattered])
  const scales = useMemo(() => new Float32Array(count).fill(1), [count])

  useLayoutEffect(() => {
    if (linesGeo.current) {
      linesGeo.current.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    }
  }, [linePositions])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const assemble = variant === 'wave' ? 1 : easeOutExpo(Math.min(1, t / 1.6))
    const p = progress?.get() ?? 0
    const hovered = hoveredRef?.current ?? null

    for (let i = 0; i < count; i++) {
      if (variant === 'wave') {
        const { x, z } = nodes[i]
        current[i].set(
          x,
          0.34 * Math.sin(x * 1.15 + t * 0.8) + 0.22 * Math.sin((z + x * 0.3) * 1.4 + t * 0.55),
          z
        )
      } else {
        current[i].lerpVectors(scattered[i], nodes[i], assemble)
      }

      // Hover energy (grid): the hovered service's column swells
      let target = 1
      if (variant === 'grid' && hovered !== null && gridCols) {
        if (groupIds![i] === hovered % gridCols) target = 2.1
      }
      scales[i] += (target - scales[i]) * 0.12
    }

    if (nodesMesh.current) {
      plainIdx.forEach((ni, k) => {
        dummy.position.copy(current[ni])
        dummy.scale.setScalar(scales[ni] * Math.max(0.001, assemble))
        dummy.updateMatrix()
        nodesMesh.current!.setMatrixAt(k, dummy.matrix)
      })
      nodesMesh.current.instanceMatrix.needsUpdate = true
    }

    if (signalsMesh.current) {
      signalIdx.forEach((ni, k) => {
        dummy.position.copy(current[ni])
        const pulse = 1 + 0.3 * Math.max(0, Math.sin(t * 1.4 + k * 2.1))
        dummy.scale.setScalar(pulse * scales[ni] * Math.max(0.001, assemble))
        dummy.updateMatrix()
        signalsMesh.current!.setMatrixAt(k, dummy.matrix)
      })
      signalsMesh.current.instanceMatrix.needsUpdate = true
    }

    if (linesGeo.current) {
      edges.forEach(([a, b], k) => {
        linePositions[k * 6] = current[a].x
        linePositions[k * 6 + 1] = current[a].y
        linePositions[k * 6 + 2] = current[a].z
        linePositions[k * 6 + 3] = current[b].x
        linePositions[k * 6 + 4] = current[b].y
        linePositions[k * 6 + 5] = current[b].z
      })
      const attr = linesGeo.current.getAttribute('position') as THREE.BufferAttribute
      attr.needsUpdate = true
    }

    if (group.current) {
      if (variant === 'cloud') {
        group.current.rotation.set(-0.18 + p * 0.35, t * 0.06 + p * 1.4, 0)
      } else if (variant === 'grid') {
        group.current.rotation.set(-0.26, 0.52 + t * 0.05 + p * 0.5, 0.02)
      } else {
        group.current.rotation.set(-0.5, t * 0.02, 0)
      }
      group.current.scale.setScalar(0.9 + assemble * 0.1)
    }
  })

  return (
    <group ref={group}>
      <instancedMesh ref={nodesMesh} args={[undefined, undefined, plainIdx.length]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color={palette.node} />
      </instancedMesh>
      <instancedMesh ref={signalsMesh} args={[undefined, undefined, signalIdx.length]}>
        <sphereGeometry args={[0.042, 10, 10]} />
        <meshBasicMaterial color={palette.signal} />
      </instancedMesh>
      <lineSegments>
        <bufferGeometry ref={linesGeo} />
        <lineBasicMaterial color={palette.line} transparent opacity={palette.lineOpacity ?? 0.7} />
      </lineSegments>
    </group>
  )
}

export default function LatticeCanvas({
  variant = 'cloud',
  progress,
  active = true,
  palette = DARK_PALETTE,
  hoveredRef,
  camera,
}: {
  variant?: LatticeVariant
  progress?: MotionValue<number>
  active?: boolean
  palette?: LatticePalette
  hoveredRef?: MutableRefObject<number | null>
  camera?: { position: [number, number, number]; fov: number }
}) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={[1, 1.75]}
      camera={camera ?? { position: [0, 0, 8.4], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <LatticeScene
        variant={variant}
        progress={progress}
        palette={palette}
        hoveredRef={hoveredRef}
      />
    </Canvas>
  )
}
