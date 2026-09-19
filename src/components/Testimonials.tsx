import { testimonials } from '../data/content'

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-card/30 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
            Testimonios
          </h2>
          <p className="text-3xl sm:text-4xl font-bold font-heading">Lo que dicen nuestros clientes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.initials} className="glass-card p-8 rounded-2xl relative">
              <div className="flex items-center text-yellow-400 gap-1 text-sm mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed italic mb-6">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold ${t.avatarClass}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold font-heading text-sm text-white">{t.name}</div>
                  <div className="text-xs text-brand-light-text">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}