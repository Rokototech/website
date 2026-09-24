export type ProjectType =
  | 'web'
  | 'ecommerce'
  | 'webapp'
  | 'mobile'
  | 'software'
  | 'maintenance'

export type PuntoPartida = 'idea' | 'design' | 'existing'

export type Presupuesto =
  | 'under800'
  | '800-1500'
  | '1500-2000'
  | 'over2000'
  | 'unknown'

export type Urgencia = 'soon' | '1-2' | '3plus' | 'exploring'

export interface ProjectTypeOption {
  type: ProjectType
  icon: string
  title: string
  desc: string
}

export interface PuntoPartidaOption {
  value: PuntoPartida
  icon: string
  title: string
  desc: string
}

export interface PresupuestoOption {
  value: Presupuesto
  label: string
}

export interface UrgenciaOption {
  value: Urgencia
  icon: string
  title: string
  desc: string
}

export interface ProjectCatalogEntry {
  nota?: string
  incluidas: string[]
  extras: string[]
}

export const projectTypeOptions: ProjectTypeOption[] = [
  {
    type: 'web',
    icon: 'fa-solid fa-laptop-code',
    title: 'Sitio Web / Landing Page',
    desc: 'Página web moderna que funciona en todos los celulares y computadoras, ¡convierte visitas en clientes reales!',
  },
  {
    type: 'ecommerce',
    icon: 'fa-solid fa-cart-shopping',
    title: 'Tienda E-Commerce',
    desc: 'Catálogo, carrito de compras y pasarela de pago.',
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
    type: 'maintenance',
    icon: 'fa-solid fa-wrench',
    title: 'Mantenimiento y Soporte',
    desc: 'Mantener tu sitio web en funcionamiento y actualizado.',
  },
]

export const projectCatalog: Record<ProjectType, ProjectCatalogEntry> = {
  web: {
    nota: 'Una landing es principalmente visual e informativa: no lleva login ni panel de usuarios.',
    incluidas: [
      'Diseño responsive',
      'SEO básico',
      'Formulario de contacto',
      'Secciones a medida',
    ],
    extras: [
      'Blog',
      'Multi-idioma',
      'Animaciones avanzadas',
      'Botón de WhatsApp y redes',
      'Analítica (Google Analytics)',
    ],
  },
  ecommerce: {
    incluidas: [
      'Catálogo de productos',
      'Carrito de compras',
      'Login y usuarios',
      'Pasarela de pagos',
      'Panel admin',
    ],
    extras: [
      'Cupones y descuentos',
      'Gestión de inventario',
      'Integración de envíos',
      'Facturación electrónica',
      'Multi-idioma',
    ],
  },
  webapp: {
    incluidas: [
      'Login y roles de permisos',
      'Panel admin',
      'Dashboard de usuario',
      'Base de datos',
    ],
    extras: [
      'Suscripciones y pagos',
      'API / integraciones',
      'Notificaciones en tiempo real',
      'Analítica visual',
      'Multi-idioma',
    ],
  },
  mobile: {
    incluidas: ['Login y usuarios', 'Backend y API', 'Publicación en tiendas'],
    extras: [
      'Notificaciones push',
      'Pagos dentro de la app',
      'Panel admin',
      'Chat / tiempo real',
      'Mapas y geolocalización',
      'Multi-idioma',
    ],
  },
  software: {
    incluidas: [
      'Login y roles de permisos',
      'Panel admin',
      'Base de datos y reportes',
    ],
    extras: [
      'Facturación',
      'Control de inventario',
      'Integración con sistemas legados',
      'Dashboard analítico',
      'Módulo de RRHH',
      'Notificaciones',
    ],
  },
  maintenance: {
    nota: 'Un servicio continuo: no se construye nada nuevo, se cuida lo que ya tienes.',
    incluidas: ['Corrección de errores', 'Copias de seguridad', 'Monitoreo básico'],
    extras: [
      'Actualizaciones de seguridad',
      'Cambios de contenido',
      'Hosting y dominio',
      'Mejoras de rendimiento',
      'Nuevas funciones por horas',
      'Soporte prioritario',
    ],
  },
}

export const puntoPartidaOptions: PuntoPartidaOption[] = [
  {
    value: 'idea',
    icon: 'fa-solid fa-lightbulb',
    title: 'Solo tengo la idea',
    desc: 'Partimos de cero y definimos juntos los detalles.',
  },
  {
    value: 'design',
    icon: 'fa-solid fa-pen-ruler',
    title: 'Tengo diseño o wireframes',
    desc: 'Ya existen maquetas, bocetos o flujos definidos.',
  },
  {
    value: 'existing',
    icon: 'fa-solid fa-arrows-rotate',
    title: 'Ya existe algo y quiero mejorarlo',
    desc: 'Rediseño, optimización o evolución de un sistema.',
  },
]

export const presupuestoOptions: PresupuestoOption[] = [
  { value: 'under800', label: '< S/.800' },
  { value: '800-1500', label: 'S/.800 – S/.1.500' },
  { value: '1500-2000', label: 'S/.1.500 – S/.2.000' },
  { value: 'over2000', label: '+ S/.2.000' },
  { value: 'unknown', label: 'Aún no lo sé' },
]

export const urgenciaOptions: UrgenciaOption[] = [
  {
    value: 'soon',
    icon: 'fa-solid fa-bolt',
    title: 'Lo antes posible',
    desc: 'Prioridad máxima para nosotros.',
  },
  {
    value: '1-2',
    icon: 'fa-solid fa-calendar-check',
    title: '1–2 meses',
    desc: 'Ritmo óptimo de desarrollo.',
  },
  {
    value: '3plus',
    icon: 'fa-solid fa-clock',
    title: '3+ meses',
    desc: 'Desarrollo escalonado por etapas.',
  },
  {
    value: 'exploring',
    icon: 'fa-solid fa-compass',
    title: 'Solo explorando',
    desc: 'Sin fecha definida, comparando opciones.',
  },
]