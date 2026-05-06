export default function Hero() {
  return (
    <section id="top" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-3/5">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-6">
              Autoškola · Demo web
            </p>
            <h1 className="mb-6">Naučte se řídit klidně a&nbsp;bez&nbsp;stresu.</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Tradiční autoškola s&nbsp;osobním přístupem. Výcvik skupiny B, A, C
              a&nbsp;kondičních jízd.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
              >
                Zapsat se →
              </a>
              <a
                href="#cenik"
                className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-7 py-3.5 rounded-xl hover:bg-bg-alt transition-colors"
              >
                Zobrazit ceník
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {['od 22 000 Kč', 'osobní přístup', 'ověřeno'].map((pill) => (
                <span
                  key={pill}
                  className="bg-bg-alt text-muted-foreground text-sm font-medium px-4 py-2 rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/5">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/Gemini_Generated_Image_rs5aefrs5aefrs5a.png"
                alt="Výcvikový vůz Autoškola Karel Krejzek"
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
                Skupina B od 22&nbsp;000 Kč
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
