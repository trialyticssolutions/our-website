import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AcubeInsights — Unlock Your Data\'s Full Potential'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  const clashDisplay = await fetch(
    new URL('./ClashDisplay-Semibold.woff', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#161210',
          padding: '72px 80px',
          fontFamily: 'Clash Display',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 22, height: 22, backgroundColor: '#D89E3A' }} />
          <div style={{ fontSize: 34, color: '#F3EEE6' }}>AcubeInsights</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, color: '#F3EEE6', lineHeight: 1.02 }}>
            Unlock Your Data&apos;s
          </div>
          <div style={{ fontSize: 84, color: '#D89E3A', lineHeight: 1.02 }}>
            Full Potential
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 22, color: '#97918A' }}>
            Data · Insights · AI Automation
          </div>
          <div style={{ width: 260, height: 2, backgroundColor: '#D89E3A' }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Clash Display',
          data: clashDisplay,
          weight: 600,
          style: 'normal',
        },
      ],
    }
  )
}
