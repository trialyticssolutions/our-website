/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // "Tungsten Ledger" palette
        char: '#161210',
        umber: '#221B16',
        bone: {
          DEFAULT: '#F3EEE6',
          2: '#EAE2D4',
        },
        brass: {
          DEFAULT: '#D89E3A',
          deep: '#7E5A1D', // 5.4:1 on bone, 4.85:1 on bone-2 (AA small text)
        },
        ash: {
          DEFAULT: '#97918A',
          deep: '#6B655D', // AA-contrast muted for light grounds
        },
        'ink-warm': '#2A241D',
        'line-dark': '#2B241E',
        'line-light': '#DDD5C7',

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "var(--radius)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        // "Workshop" easing — quick approach, mechanical settle (entrances/standard)
        mech: 'cubic-bezier(0.22, 1, 0.36, 1)',
        // Exits accelerate out
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
      transitionDuration: {
        micro: '150ms',
        standard: '300ms',
        // Between standard and large — the services-row inversion wipe.
        // NOTE: arbitrary duration-[...] classes are ambiguous with
        // tailwindcss-animate's animation-duration utility; use named tokens.
        450: '450ms',
        large: '600ms',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
  ],
}
