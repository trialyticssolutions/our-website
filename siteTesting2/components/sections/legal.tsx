import { ReactNode } from 'react'

/* Quiet editorial shell for legal pages — no motion, maximum readability */

export function LegalShell({
  title,
  sub,
  children,
}: {
  title: string
  sub: string
  children: ReactNode
}) {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <section className="bg-char py-20 text-bone md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mono-label text-brass">Legal Information</p>
            <h1 className="mt-6 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-tight">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/70">{sub}</p>
          </div>
        </div>
      </section>

      <section className="bg-bone py-16 text-char md:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <article className="max-w-3xl">
            {children}
            <p className="mono-label mt-16 border-t border-line-light pt-6 text-ash-deep">
              Last updated: {lastUpdated}
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export function LegalBlock({
  heading,
  children,
}: {
  heading?: string
  children: ReactNode
}) {
  return (
    <div className="border-t border-line-light py-10 first:border-t-0 first:pt-0">
      {heading && <h2 className="mono-label text-brass-deep">{heading}</h2>}
      <div className="mt-4 space-y-4 leading-relaxed text-ink-warm/80 [&_a]:font-medium [&_a]:text-brass-deep [&_a]:underline [&_a]:underline-offset-2 [&_ul]:space-y-2.5">
        {children}
      </div>
    </div>
  )
}

export function LegalBullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-baseline gap-3">
      <span className="h-1.5 w-1.5 shrink-0 bg-brass" aria-hidden="true" />
      <span>{children}</span>
    </li>
  )
}
