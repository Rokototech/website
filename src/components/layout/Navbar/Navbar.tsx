import { navLinks } from '../../../data/content'
import { useMobileMenu } from './useMobileMenu'
import { Logo } from '../../ui/Logo'

export function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu()

  return (
    <header className="glass-nav fixed top-0 right-0 left-0 z-50 transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 transition-colors hover:text-brand-orange"
            >
              {link.label}
              {link.badge && (
                <span className="rounded border border-brand-orange/30 bg-brand-orange/20 px-1.5 py-0.5 text-[10px] font-semibold text-brand-orange">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contacto"
            className="hidden items-center justify-center rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-magma transition-all hover:scale-105 hover:bg-brand-orange-hover sm:inline-flex"
          >
            Hablemos <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
          </a>

          <button
            onClick={toggle}
            className="rounded-lg border border-brand-border bg-brand-card p-2 text-gray-300 hover:text-white focus:outline-none md:hidden"
          >
            <i
              className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}
            ></i>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="glass-nav border-b border-brand-border px-6 pt-4 pb-6 transition-all md:hidden">
          <div className="flex flex-col gap-4 font-medium text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="py-1 hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={close}
              className="mt-2 inline-flex justify-center rounded-lg bg-brand-orange py-3 text-center font-semibold text-white shadow-magma"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
