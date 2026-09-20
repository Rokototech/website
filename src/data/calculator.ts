export type ProjectType =
  'web' | 'webapp' | 'mobile' | 'software' | 'ecommerce' | 'ai'

export type TimelineType = 'urgent' | 'standard' | 'flexible'

export type FeatureKey =
  'auth' | 'payments' | 'admin' | 'api' | 'chat' | 'multilang'

export interface ProjectTypeOption {
  type: ProjectType
  icon: string
  title: string
  desc: string
}

export const projectTypeOptions: ProjectTypeOption[] = [
  {
    type: 'web',
    icon: 'fa-solid fa-laptop-code',
    title: 'Sitio Web / Landing Page',
    desc: 'Diseño dinámico, responsive y enfocado en conversión.',
  },
  {
    type: 'webapp',
    icon: 'fa-solid fa-layer-group',
    title: 'Plataforma Web SaaS',
    desc: 'Sistemas web complejos, usuarios, paneles admin.',
  },
  {
    type: 'mobile',
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'App Móvil (iOS/Android)',
    desc: 'Aplicación nativa o multiplataforma interactiva.',
  },
  {
    type: 'software',
    icon: 'fa-solid fa-gears',
    title: 'Software Empresarial ERP',
    desc: 'Sistemas integrados de gestión a medida.',
  },
  {
    type: 'ecommerce',
    icon: 'fa-solid fa-cart-shopping',
    title: 'Tienda E-Commerce',
    desc: 'Catálogo, carrito de compras y pasarela de pago.',
  },
  {
    type: 'ai',
    icon: 'fa-solid fa-brain',
    title: 'Solución con IA / Bot',
    desc: 'Integración LLM, automatización e IA generativa.',
  },
]

export interface FeatureOption {
  key: FeatureKey
  title: string
  desc: string
}

export const featureOptions: FeatureOption[] = [
  {
    key: 'auth',
    title: 'Autenticación & Usuarios',
    desc: 'Login, registro, roles de permisos y OAuth',
  },
  {
    key: 'payments',
    title: 'Pasarela de Pagos',
    desc: 'Stripe, PayPal, Culqi o MercadoPago integrados',
  },
  {
    key: 'admin',
    title: 'Panel Administrador Dashboard',
    desc: 'Gestión de datos, métricas y analítica visual',
  },
  {
    key: 'api',
    title: 'API REST & Microservicios',
    desc: 'Conexión con software externo o sistemas legados',
  },
  {
    key: 'chat',
    title: 'Notificaciones & Tiempo Real',
    desc: 'Sockets, chat interno y alertas push',
  },
  {
    key: 'multilang',
    title: 'Soporte Multi-idioma (i18n)',
    desc: 'Español, Inglés y localización global',
  },
]

export interface TimelineOption {
  value: TimelineType
  icon: string
  title: string
  desc: string
  iconClass: string
}

export const timelineOptions: TimelineOption[] = [
  {
    value: 'urgent',
    icon: 'fa-solid fa-bolt',
    title: 'Urgente (< 3-4 semanas)',
    desc: 'Prioridad máxima de equipo',
    iconClass: 'text-yellow-400',
  },
  {
    value: 'standard',
    icon: 'fa-solid fa-calendar-check',
    title: 'Estándar (1 - 2 meses)',
    desc: 'Ritmo óptimo de desarrollo',
    iconClass: 'text-brand-orange',
  },
  {
    value: 'flexible',
    icon: 'fa-solid fa-clock',
    title: 'Planificado (3+ meses)',
    desc: 'Desarrollo escalonado por etapas',
    iconClass: 'text-blue-400',
  },
]
