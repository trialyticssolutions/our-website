'use client'

// CREDIT
// Visual concept adapted from React Bits' <Cubes />, inspired by Can Tastemel's
// work for the lambda.ai landing page — https://cantastemel.com
// Re-engineered for AcubeInsights: a single damped-lerp rAF loop drives every
// cube (no per-cube tween allocation), each cube renders only the 3 faces
// visible at our tilt direction, and the loop self-stops when settled.
// Styles live in globals.css (.cubes-field).

import { CSSProperties, useCallback, useEffect, useRef } from 'react'

interface CubesProps {
  cols?: number
  rows?: number
  /** Max tilt in degrees at the cursor */
  maxAngle?: number
  /** Tilt falloff radius, in cells */
  radius?: number
  cellGap?: number
  faceColor?: string
  /** Color of the side faces revealed when a cube tilts */
  sideColor?: string
}

export default function Cubes({
  cols = 13,
  rows = 8,
  maxAngle = 19,
  radius = 3,
  cellGap = 14,
  faceColor = 'transparent',
  sideColor = '#161210',
}: CubesProps) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const cellRefs = useRef<(HTMLDivElement | null)[]>([])
  const count = cols * rows

  // Engine state in refs — the loop never touches React
  const engine = useRef({
    angle: new Float32Array(0),
    px: 0,
    py: 0,
    inside: false,
    raf: null as number | null,
  })

  useEffect(() => {
    engine.current.angle = new Float32Array(count)
  }, [count])

  const step = useCallback(() => {
    const e = engine.current
    let alive = false

    for (let i = 0; i < count; i++) {
      const el = cellRefs.current[i]
      if (!el) continue
      const row = (i / cols) | 0
      const col = i % cols

      const dist = Math.hypot(col + 0.5 - e.px, row + 0.5 - e.py)
      const target = e.inside && dist <= radius ? (1 - dist / radius) * maxAngle : 0

      // Distance-damped easing: cubes near the cursor respond quickly,
      // farther ones trail — the ripple emerges from physics, not delays
      const k = e.inside ? Math.min(0.26, Math.max(0.1, 0.26 - dist * 0.03)) : 0.13

      const prev = e.angle[i]
      let a = prev + (target - prev) * k
      if (Math.abs(a - target) < 0.02) a = target
      else alive = true

      if (a !== prev) {
        e.angle[i] = a
        el.style.transform =
          a === 0 ? 'rotateX(0deg) rotateY(0deg)' : `rotateX(${-a}deg) rotateY(${a}deg)`
      }
    }

    e.raf = alive ? requestAnimationFrame(step) : null
  }, [count, cols, radius, maxAngle])

  const wake = useCallback(() => {
    const e = engine.current
    if (e.raf == null) e.raf = requestAnimationFrame(step)
  }, [step])

  useEffect(() => {
    const el = sceneRef.current
    if (!el) return

    const onMove = (ev: PointerEvent) => {
      if (ev.pointerType && ev.pointerType !== 'mouse') return
      const rect = el.getBoundingClientRect()
      const e = engine.current
      e.px = ((ev.clientX - rect.left) / rect.width) * cols
      e.py = ((ev.clientY - rect.top) / rect.height) * rows
      e.inside = true
      wake()
    }
    const onLeave = () => {
      engine.current.inside = false
      wake()
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      const e = engine.current
      if (e.raf != null) cancelAnimationFrame(e.raf)
      e.raf = null
    }
  }, [cols, rows, wake])

  const sceneStyle = {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    columnGap: `${cellGap}px`,
    rowGap: `${cellGap}px`,
    '--cube-face-bg': faceColor,
    '--cube-side-bg': sideColor,
  } as CSSProperties

  return (
    <div className="cubes-field">
      <div ref={sceneRef} className="cubes-field--scene" style={sceneStyle}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              cellRefs.current[i] = el
            }}
            className="cube"
          >
            {/* Only the faces visible at rotateX(-θ) rotateY(+θ): front + bottom + left */}
            <div className="cube-face cube-face--front" />
            <div className="cube-face cube-face--bottom" />
            <div className="cube-face cube-face--left" />
          </div>
        ))}
      </div>
    </div>
  )
}
