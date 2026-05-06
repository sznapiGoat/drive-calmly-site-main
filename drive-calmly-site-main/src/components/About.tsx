import instructorPhoto from '@/assets/instructor.jpg'

const highlights = [
  'Přátelský a lidský přístup',
  'Klidné vysvětlení všech pravidel',
  'Učení bez křiku a stresu',
  'Skvělé zkušenosti i pro starší žáky',
]

export default function About() {
  return (
    <section id="o-nas" className="py-24 md:py-32 bg-bg-alt">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <img
              src={instructorPhoto}
              alt="Karel Krejzek, instruktor autoškoly"
              width={800}
              height={800}
              loading="lazy"
              className="rounded-2xl w-full max-w-sm mx-auto shadow-md"
            />
          </div>
          <div className="w-full md:w-3/5">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              ✦ Instruktor od roku 1995
            </p>
            <h2 className="mb-6">Váš instruktor: Karel Krejzek</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Pan Karel je instruktor s&nbsp;dlouholetou praxí. Je známý svou{' '}
              <strong className="text-foreground font-semibold">
                výjimečnou trpělivostí a&nbsp;klidem
              </strong>
              , který přenáší na&nbsp;studenty. Díky jeho přístupu se za&nbsp;volantem budete
              cítit bezpečně od&nbsp;první jízdy.
            </p>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-4 text-base">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
