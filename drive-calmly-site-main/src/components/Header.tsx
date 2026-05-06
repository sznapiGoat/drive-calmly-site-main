import { useState } from 'react'
import logo from '@/assets/logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Autoškola Karel Krejzek"
            width={44}
            height={44}
            className="w-10 h-10"
            loading="lazy"
          />
          <span className="font-bold text-foreground text-base leading-tight">
            Autoškola
            <br />
            Karel Krejzek
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#o-nas"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            O nás
          </a>
          <a
            href="#cenik"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Ceník
          </a>
          <a
            href="#kontakt"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Kontakt
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded-xl bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Zapsat se →
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label="Otevřít menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border px-6 py-5 space-y-4 bg-background">
          <a
            href="#o-nas"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            O nás
          </a>
          <a
            href="#cenik"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Ceník
          </a>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Kontakt
          </a>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded-xl bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Zapsat se →
          </a>
        </nav>
      )}
    </header>
  )
}
