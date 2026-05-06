export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div>
            <p className="text-xl font-bold mb-2 font-serif">Autoškola Karel Krejzek</p>
            <p className="text-sm max-w-xs text-[#a0a0a0]">
              Tradiční autoškola s&nbsp;osobním přístupem v&nbsp;Moravské Třebové.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              Navigace
            </p>
            <nav className="space-y-2">
              <a href="#o-nas" className="block text-sm text-[#a0a0a0]">
                O nás
              </a>
              <a href="#cenik" className="block text-sm text-[#a0a0a0]">
                Ceník
              </a>
              <a href="#kontakt" className="block text-sm text-[#a0a0a0]">
                Kontakt
              </a>
              <a href="tel:+420739209837" className="block text-sm font-semibold text-accent">
                739 209 837
              </a>
            </nav>
          </div>
        </div>
        <div className="border-t border-[#2e2e2e] pt-6">
          <p className="text-xs text-center text-[#6b6b6b]">
            © {new Date().getFullYear()} Autoškola Karel Krejzek · Demo web
          </p>
        </div>
      </div>
    </footer>
  )
}
