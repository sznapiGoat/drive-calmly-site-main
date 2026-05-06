import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2>Kde nás najdete a&nbsp;jak se spojit</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/2 bg-bg-alt rounded-2xl p-8 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                Adresa
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                J. K. Tyla 1275/9
                <br />
                571 01 Moravská Třebová
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                Telefon
              </p>
              <a
                href="tel:+420739209837"
                className="inline-flex items-center gap-3 font-semibold text-lg px-6 py-3.5 rounded-xl bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                739 209 837
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <iframe
              title="Mapa – Autoškola Karel Krejzek"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.5!2d16.6625!3d49.7575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712a1e3c0000001%3A0x1!2sJ.+K.+Tyla+1275%2F9%2C+571+01+Moravsk%C3%A1+T%C5%99ebov%C3%A1!5e0!3m2!1scs!2scz!4v1700000000000"
              className="w-full h-full min-h-64 rounded-2xl border border-border shadow-sm"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-center mb-8">Napište nám</h3>
          {submitted ? (
            <div className="text-center py-12 bg-bg-alt rounded-2xl">
              <p className="text-lg font-semibold text-foreground">Děkujeme! Ozveme se.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Jméno
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Vaše jméno"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Váš telefon"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Zpráva
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Vaše zpráva..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold text-sm px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
              >
                Odeslat zprávu →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
