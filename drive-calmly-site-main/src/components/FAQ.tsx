import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Kdy mohu začít?',
    a: 'Zápis přijímáme průběžně. Zavolejte a domluvíme termín.',
  },
  {
    q: 'Jak dlouho výcvik trvá?',
    a: 'Standardní kurz skupiny B trvá 2–4 měsíce dle Vašich možností a tempa.',
  },
  {
    q: 'Mohu platit na splátky?',
    a: 'Ano, platbu lze domluvit individuálně.',
  },
  {
    q: 'Co mám přinést na první hodinu?',
    a: 'Platný občanský průkaz, lékařský posudek o zdravotní způsobilosti a fotografii.',
  },
  {
    q: 'Co když u zkoušky neuspěji?',
    a: 'Opravnou zkoušku je možné absolvovat, cena opravné jízdy se domluví individuálně.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-bg-alt">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2>Časté otázky</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b-0 bg-card rounded-xl border border-border px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-base py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
