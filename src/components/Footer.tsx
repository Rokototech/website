import { navLinks, contact } from '../data/content'
import { useModal } from '../hooks/useModal'
import { Logo } from './Logo'

const footerNav: { label: string; href: string }[] = navLinks.filter(
  (link) => link.href !== '#contacto',
)

const specialties = ['Web Development', 'Aplicaciones Móviles', 'Software Empresarial', 'Cloud & DevOps']

export function Footer() {
  const { alert } = useModal()

  const handleSubscribe = () => {
    alert('Suscripción', '¡Gracias por suscribirte al boletín de VOLKANEXT!')
  }

  return (
    <footer className="bg-brand-dark border-t border-brand-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Logo size="sm" withTagline={false} />
            <p className="text-xs text-brand-light-text leading-relaxed mt-4">
              Desarrollo web y de software de alto impacto visual y técnico. {contact.location}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-brand-light-text">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-orange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contacto" className="hover:text-brand-orange transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs text-brand-light-text">
              {specialties.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Mantente Conectado
            </h4>
            <p className="text-xs text-brand-light-text mb-3">
              Recibe artículos sobre desarrollo e innovación tech.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo..."
                className="bg-brand-card border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-orange flex-1"
              />
              <button
                onClick={handleSubscribe}
                className="bg-brand-orange text-white px-3 py-2 rounded-lg text-xs font-bold hover:bg-brand-orange-hover transition-colors"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 VOLKANEXT. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-300">
              Privacidad
            </a>
            <a href="#" className="hover:text-gray-300">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}