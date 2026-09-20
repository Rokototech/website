export interface Stat {
  value: number
  suffix: string
  label: string
  accent?: boolean
}

export const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Proyectos Entregados' },
  { value: 99, suffix: '.8%', label: 'Uptime & Confiabilidad', accent: true },
  { value: 10, suffix: '+', label: 'Países Alcanzados' },
  { value: 100, suffix: '%', label: 'Satisfacción del Cliente' },
]

export interface TechItem {
  icon: string
  label: string
  iconClass: string
}

export const techStack: TechItem[] = [
  {
    icon: 'fa-brands fa-react',
    label: 'React / Next.js',
    iconClass: 'text-cyan-400',
  },
  {
    icon: 'fa-brands fa-node-js',
    label: 'Node.js',
    iconClass: 'text-green-500',
  },
  {
    icon: 'fa-brands fa-python',
    label: 'Python / Fast API',
    iconClass: 'text-yellow-400',
  },
  {
    icon: 'fa-brands fa-aws',
    label: 'Cloud & AWS',
    iconClass: 'text-orange-400',
  },
  {
    icon: 'fa-brands fa-docker',
    label: 'Docker & DevOps',
    iconClass: 'text-blue-400',
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    label: 'React Native / Flutter',
    iconClass: 'text-brand-orange',
  },
]
