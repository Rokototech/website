import { useEffect, useRef, useState, type FormEvent } from 'react'
import { contact, socials } from '../data/content'

const inputClass =
  'w-full bg-brand-dark/80 border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors'

const labelClass =
  'block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2'

export function Contact({ quoteMessage }: { quoteMessage?: string }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [prevQuote, setPrevQuote] = useState(quoteMessage ?? '')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  if (quoteMessage !== prevQuote) {
    setPrevQuote(quoteMessage ?? '')
    setForm((prev) => ({ ...prev, message: quoteMessage ?? '' }))
  }

  useEffect(() => {
    if (quoteMessage) {
      textareaRef.current?.focus()
    }
  }, [quoteMessage])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    window.setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="contacto" className="py-24 bg-brand-card/20 border-t border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Hablemos de tu Proyecto
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight mt-3 mb-6">
              ¿Listo para escalar tu negocio digital?
            </h2>
            <p className="text-brand-light-text text-base mb-8 leading-relaxed">
              Cuéntanos tu idea o requerimiento técnico. Te responderemos en menos de 24 horas con
              una propuesta clara y sin compromiso.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange text-xl shadow-glow">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="text-xs text-brand-light-text uppercase tracking-wider">
                    Correo Electrónico
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-bold font-heading text-white hover:text-brand-orange transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange text-xl shadow-glow">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <div className="text-xs text-brand-light-text uppercase tracking-wider">
                    Teléfono / WhatsApp
                  </div>
                  <a
                    href={contact.phoneHref}
                    className="font-bold font-heading text-white hover:text-brand-orange transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange text-xl shadow-glow">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <div className="text-xs text-brand-light-text uppercase tracking-wider">
                    Ubicación
                  </div>
                  <div className="font-bold font-heading text-white">{contact.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-all"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-brand-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={labelClass}>Nombre Completo *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ej: Carlos Mendoza"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Correo Corporativo *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="carlos@empresa.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+51 900 000 000"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Detalles del Proyecto *</label>
                <textarea
                  ref={textareaRef}
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe brevemente tus requerimientos o idea de software..."
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold bg-brand-orange text-white hover:bg-brand-orange-hover shadow-magma transition-all flex items-center justify-center gap-2"
              >
                <span>Enviar Solicitud</span> <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </form>

            {sent && (
              <div className="mt-4 p-4 rounded-xl text-center text-sm font-semibold bg-green-500/20 text-green-400 border border-green-500/40">
                ¡Mensaje enviado con éxito! Un especialista de VOLKANEXT se pondrá en contacto en
                breve.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}