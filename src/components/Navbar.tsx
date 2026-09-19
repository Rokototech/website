import { navLinks } from '../data/content'
import { useMobileMenu } from '../hooks/useMobileMenu'
import { Logo } from './Logo'

export function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-orange transition-colors flex items-center gap-1.5"
            >
              {link.label}
              {link.badge && (
                <span className="bg-brand-orange/20 text-brand-orange text-[10px] px-1.5 py-0.5 rounded font-semibold border border-brand-orange/30">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-sm bg-brand-orange text-white hover:bg-brand-orange-hover shadow-magma transition-all hover:scale-105"
          >
            Hablemos <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
          </a>

          <button
            onClick={toggle}
            className="md:hidden p-2 rounded-lg bg-brand-card text-gray-300 hover:text-white border border-brand-border focus:outline-none"
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-nav border-b border-brand-border px-6 pt-4 pb-6 transition-all">
          <div className="flex flex-col gap-4 font-medium text-gray-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={close} className="hover:text-brand-orange py-1">
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={close}
              className="inline-flex justify-center py-3 bg-brand-orange text-white font-semibold rounded-lg text-center mt-2 shadow-magma"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      )}
    </header>
  )
}