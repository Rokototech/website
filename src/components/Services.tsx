import { services } from '../data/content'
import { useModal } from '../hooks/useModal'

export function Services() {
  const { openService } = useModal()

  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
            Nuestras Capacidades
          </h2>
          <p className="text-3xl sm:text-5xl font-bold font-heading tracking-tight mb-4">
            Servicios Digitales de Alto Rendimiento
          </p>
          <p className="text-brand-light-text text-base sm:text-lg">
            Ofrecemos soluciones end-to-end adaptadas a startups en crecimiento y empresas
            consolidadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              onClick={() => openService(service.key)}
              className="glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange text-2xl mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all shadow-glow">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-light-text text-sm leading-relaxed mb-6">{service.desc}</p>
              <div className="flex items-center text-xs font-semibold text-brand-orange group-hover:translate-x-1 transition-transform">
                Saber más <i className="fa-solid fa-arrow-right ml-2"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}