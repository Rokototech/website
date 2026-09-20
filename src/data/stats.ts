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