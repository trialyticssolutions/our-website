'use client'

import { MutableRefObject, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Environment, Lightformer, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

/* ============================================================
   The Acube — the brand mark as a sculpture. A 3×3×3 cube of
   semi-transparent metal cells with brass signal cells. It
   breathes, tumbles slowly, tilts toward the cursor, and
   exhales apart when a service row is hovered.
   ============================================================ */

const GAP = 0.64
const CELL = 0.54

const CELLS: [number, number, number][] = []
for (let x = -1; x <= 1; x++)
  for (let y = -1; y <= 1; y++)
    for (let z = -1; z <= 1; z++) CELLS.push([x, y, z])

/* Brass signal cells: two corners and the core */
const ACCENTS = new Set([0, 13, 26])

function AcubeScene({ hoveredRef }: { hoveredRef?: MutableRefObject<number | null> }) {
  const group = useRef<THREE.Group>(null)
  const spread = useRef(1)
  const glow = useRef(0.12)
  const cellRefs = useRef<(THREE.Mesh | null)[]>([])
  const accentMats = useRef<(THREE.MeshStandardMaterial | null)[]>([])

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime
    const hovered = (hoveredRef?.current ?? null) !== null
    const step = Math.min(1, dt * 6)

    // Exhale apart while a service row is hovered
    spread.current += ((hovered ? 1.32 : 1) - spread.current) * step
    glow.current += ((hovered ? 0.65 : 0.12) - glow.current) * step

    const breathe = 1 + 0.025 * Math.sin(t * 0.8)
    const s = GAP * spread.current * breathe

    CELLS.forEach((c, i) => {
      const mesh = cellRefs.current[i]
      if (mesh) mesh.position.set(c[0] * s, c[1] * s, c[2] * s)
    })

    accentMats.current.forEach((mat) => {
      if (mat) mat.emissiveIntensity = glow.current
    })

    if (group.current) {
      group.current.rotation.y = t * 0.26 + state.pointer.x * 0.4
      group.current.rotation.x = -0.26 + Math.sin(t * 0.35) * 0.05 - state.pointer.y * 0.28
    }
  })

  return (
    <group ref={group}>
      {CELLS.map((c, i) => (
        <RoundedBox
          key={i}
          ref={(el: THREE.Mesh | null) => {
            cellRefs.current[i] = el
          }}
          args={[CELL, CELL, CELL]}
          radius={0.075}
          smoothness={3}
          position={[c[0] * GAP, c[1] * GAP, c[2] * GAP]}
        >
          {ACCENTS.has(i) ? (
            <meshStandardMaterial
              ref={(m: THREE.MeshStandardMaterial | null) => {
                if (m && !accentMats.current.includes(m)) accentMats.current.push(m)
              }}
              color="#D89E3A"
              metalness={0.85}
              roughness={0.24}
              emissive="#D89E3A"
              emissiveIntensity={0.12}
            />
          ) : (
            <meshStandardMaterial color="#2E2721" metalness={0.9} roughness={0.32} />
          )}
        </RoundedBox>
      ))}
    </group>
  )
}

export default function AcubeCanvas({
  active = true,
  hoveredRef,
}: {
  active?: boolean
  hoveredRef?: MutableRefObject<number | null>
}) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={[1, 1.75]}
      camera={{ position: [3.1, 2.3, 3.5], fov: 34 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.7} />
      <directionalLight position={[-4, -2, -4]} intensity={0.5} color="#F3EEE6" />
      {/* Procedural studio environment — no network fetch */}
      <Environment resolution={64} frames={1}>
        <Lightformer intensity={1.3} position={[0, 4, 0]} rotation-x={Math.PI / 2} scale={[8, 8, 1]} color="#F3EEE6" />
        <Lightformer intensity={0.7} position={[-4, 1, 2]} rotation-y={Math.PI / 2} scale={[6, 2, 1]} color="#D89E3A" />
        <Lightformer intensity={0.4} position={[4, -1, -2]} rotation-y={-Math.PI / 2} scale={[6, 2, 1]} color="#F3EEE6" />
      </Environment>
      <AcubeScene hoveredRef={hoveredRef} />
      {/* Soft revolving contact shadow beneath the cube */}
      <ContactShadows
        position={[0, -1.45, 0]}
        opacity={0.3}
        scale={5.5}
        blur={2.6}
        far={3.2}
        resolution={256}
        color="#161210"
      />
    </Canvas>
  )
}
