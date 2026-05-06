const plans = [
  {
    group: 'B',
    title: 'Skupina B',
    subtitle: 'Osobní automobil',
    price: '22 000 Kč',
    vehicle: 'Škoda Fabia',
    bullets: ['osobní automobil', 'výuka teorie', 'doprovod ke zkoušce'],
    featured: true,
  },
  {
    group: 'A',
    title: 'Skupina A / A1 / A2',
    subtitle: 'Motocykly',
    price: 'Na dotaz',
    vehicle: 'různé kategorie',
    bullets: ['různé kategorie dle věku', 'cvičiště + provoz', 'individuální konzultace'],
    featured: false,
  },
  {
    group: 'C',
    title: 'Skupina C / D / E / T',
    subtitle: 'Nákladní a speciální',
    price: 'Na dotaz',
    vehicle: 'nákladní a speciální',
    bullets: ['rozšíření oprávnění', 'individuální plán', 'zkušený instruktor'],
    featured: false,
  },
  {
    group: '↺',
    title: 'Kondiční jízdy',
    subtitle: 'Pro stávající řidiče',
    price: 'Na dotaz',
    vehicle: 'pro řidiče',
    bullets: ['obnova dovedností', 'vlastní tempo', 'bez závazků'],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="cenik" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="mb-4">Co nabízíme &amp; Ceník</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Vyberte kurz, který vám sedí. Přesnou nabídku domluvíme telefonicky.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) =>
            plan.featured ? (
              <div
                key={plan.group}
                className="bg-primary rounded-2xl p-8 flex flex-col gap-6"
              >
                <span className="text-5xl font-bold leading-none text-accent font-serif">
                  {plan.group}
                </span>
                <div>
                  <h3 className="mb-1 text-primary-foreground">{plan.title}</h3>
                  <p className="text-sm text-[#a0a0a0]">
                    {plan.subtitle} · {plan.vehicle}
                  </p>
                </div>
                <span className="text-4xl font-bold text-primary-foreground font-serif">
                  {plan.price}
                </span>
                <ul className="space-y-2 flex-1">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-[#d4d4d4]">
                      <span className="text-accent flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 rounded-xl bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  Vybrat kurz →
                </a>
              </div>
            ) : (
              <div
                key={plan.group}
                className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-6"
              >
                <span className="text-5xl font-bold leading-none text-muted-foreground font-serif">
                  {plan.group}
                </span>
                <div>
                  <h3 className="mb-1">{plan.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.subtitle} · {plan.vehicle}
                  </p>
                </div>
                <span className="text-4xl font-bold font-serif">{plan.price}</span>
                <ul className="space-y-2 flex-1">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="text-accent flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 rounded-xl border border-border hover:bg-bg-alt transition-colors"
                >
                  Vybrat kurz →
                </a>
              </div>
            ),
          )}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10 max-w-lg mx-auto">
          Ceny jsou orientační. Přesnou nabídku domluvíme telefonicky. Nejsme plátci DPH.
        </p>
      </div>
    </section>
  )
}
