export interface NavLink {
  label: string
  href: string
  badge?: string
  right?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Calculadora', href: '#calculadora', badge: 'PRO' },
  { label: 'Contacto', href: '#contacto', right: true },
]