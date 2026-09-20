export type ProjectCategory = 'web' | 'mobile' | 'enterprise'

export interface Project {
  id: number
  category: ProjectCategory
  image: string
  alt: string
  tag: string
  title: string
  desc: string
  techs: string[]
  client: string
  modalTitle: string
  modalDesc: string
  impact: string
}

export type ProjectFilter = 'all' | ProjectCategory

export const projects: Project[] = [
  {
    id: 1,
    category: 'web',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    alt: 'Fintech Dashboard',
    tag: 'SaaS & FinTech',
    title: 'Plataforma Analytics ApexFin',
    desc: 'Dashboard financiero en tiempo real capaz de procesar +1M transacciones diarias con latencia ultra baja.',
    techs: ['Next.js', 'TypeScript', 'Tailwind'],
    client: 'Fintech Solutions Corp',
    modalTitle: 'ApexFin Analytics SaaS',
    modalDesc:
      'Plataforma web de analítica financiera que procesa streaming de datos en tiempo real con dashboards gráficos interactivos.',
    impact: '+300% de velocidad de procesamiento vs versión anterior.',
  },
  {
    id: 2,
    category: 'mobile',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    alt: 'Health App',
    tag: 'Mobile App',
    title: 'VolkanHealth Tracker',
    desc: 'Aplicación móvil iOS/Android para seguimiento de rendimiento de atletas con telemetría en tiempo real.',
    techs: ['React Native', 'FastAPI', 'Bluetooth LE'],
    client: 'HealthTech Global',
    modalTitle: 'VolkanHealth Mobile',
    modalDesc:
      'Aplicación nativa de rendimiento deportivo con conexión directa a dispositivos wearables por Bluetooth de baja energía.',
    impact: '+45,000 descargas activas en las tiendas móviles.',
  },
  {
    id: 3,
    category: 'enterprise',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    alt: 'Logistics Software',
    tag: 'Enterprise ERP',
    title: 'Sistema Logístico LogiNext',
    desc: 'ERP integral para optimización de rutas de carga, control de inventario y monitoreo satelital.',
    techs: ['Python', 'Docker', 'PostgreSQL'],
    client: 'LogiNext Peru',
    modalTitle: 'LogiNext ERP Logístico',
    modalDesc:
      'Software empresarial a medida para el control en tiempo real de flotas de carga pesada y gestión automatizada de inventario.',
    impact: 'Reducción del 35% en tiempos de despacho operativo.',
  },
]