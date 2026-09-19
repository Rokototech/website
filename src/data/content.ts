export interface NavLink {
  label: string
  href: string
  badge?: string
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Calculadora', href: '#calculadora', badge: 'PRO' },
  { label: 'Contacto', href: '#contacto' },
]

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

export type ServiceKey = 'web' | 'mobile' | 'software' | 'cloud' | 'uiux' | 'ai'

export interface Service {
  key: ServiceKey
  icon: string
  title: string
  desc: string
  modalTitle: string
  modalDesc: string
  stack: string[]
}

export const services: Service[] = [
  {
    key: 'web',
    icon: 'fa-solid fa-code',
    title: 'Desarrollo Web & Web Apps',
    desc: 'Plataformas SaaS, portales corporativos y aplicaciones web de alto impacto con Next.js y React. Optimizado para SEO y velocidad.',
    modalTitle: 'Desarrollo Web & Web Apps',
    modalDesc:
      'Desarrollamos experiencias digitales web optimizadas para máxima conversión, SEO impecable y código limpio con los frameworks más potentes.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js'],
  },
  {
    key: 'mobile',
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Aplicaciones Móviles',
    desc: 'Desarrollo nativo e híbrido para iOS y Android. Aplicaciones fluidas con experiencia de usuario nativa y sincronización en tiempo real.',
    modalTitle: 'Aplicaciones Móviles Nativas e Híbridas',
    modalDesc:
      'Apps para iOS y Android creadas con React Native o Flutter, ofreciendo rendimiento fluido a 60fps, notificaciones push y diseño UX intuitivo.',
    stack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    key: 'software',
    icon: 'fa-solid fa-gears',
    title: 'Software a Medida & ERPs',
    desc: 'Sistemas de gestión, automatización de procesos internos, dashboards analíticos y microservicios diseñados a la medida de tu empresa.',
    modalTitle: 'Software a Medida & ERPs',
    modalDesc:
      'Digitalizamos los procesos clave de tu empresa con software personalizado que elimina cuello de botella e incrementa la productividad.',
    stack: ['Python', 'PostgreSQL', 'Docker', 'FastAPI', 'Redis'],
  },
  {
    key: 'cloud',
    icon: 'fa-solid fa-cloud-arrow-up',
    title: 'Cloud & DevOps Deployment',
    desc: 'Arquitectura en la nube escalable, integración continua (CI/CD), contenedores Docker/Kubernetes y gestión de infraestructura segura.',
    modalTitle: 'Cloud & DevOps Infrastructure',
    modalDesc:
      'Diseño de arquitecturas tolerantes a fallos en AWS/GCP, automatización CI/CD, monitoreo de servidor y escalamiento automático.',
    stack: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Nginx'],
  },
  {
    key: 'uiux',
    icon: 'fa-solid fa-palette',
    title: 'Diseño UI/UX Profesional',
    desc: 'Interfaces memorables, prototipos interactivos en Figma y diseño centrado en la conversión y la mejor usabilidad para tus usuarios.',
    modalTitle: 'Diseño de Experiencia UI/UX',
    modalDesc:
      'Creamos prototipos interactivos en Figma centrados en la usabilidad, arquitectura de información y estética Cyberpunk/Tech de vanguardia.',
    stack: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
  },
  {
    key: 'ai',
    icon: 'fa-solid fa-brain',
    title: 'Integración de IA & Bots',
    desc: 'Potenciamos tus apps con modelos de Inteligencia Artificial (OpenAI, Claude, LLMs), automatización inteligente y procesamiento de datos.',
    modalTitle: 'Integración de Inteligencia Artificial',
    modalDesc:
      'Aprovecha la potencia de la IA generativa, embeddings vectoriales y chatbots avanzados entrenados con tus propios datos.',
    stack: ['OpenAI API', 'LangChain', 'Python', 'Vector DBs'],
  },
]

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

export type ProjectFilter = 'all' | ProjectCategory

export interface Testimonial {
  quote: string
  initials: string
  name: string
  role: string
  avatarClass: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      '"VOLKANEXT transformó por completo nuestra infraestructura web. La velocidad de carga mejoró un 300% y las conversiones de clientes aumentaron significativamente."',
    initials: 'AD',
    name: 'Aaron Daniel',
    role: 'CTO en FinTech Solutions',
    avatarClass: 'bg-brand-orange/30 border-brand-orange text-brand-orange',
  },
  {
    quote:
      '"Su capacidad técnica para construir aplicaciones móviles complejas con sincronización en tiempo real es impresionante. Cumplieron los plazos al 100%."',
    initials: 'VC',
    name: 'Valeria Castro',
    role: 'Product Lead en LogiNext',
    avatarClass: 'bg-blue-500/30 border-blue-500 text-blue-400',
  },
  {
    quote:
      '"Profesionalismo, código limpio e impecable diseño UI/UX. No solo escriben software, entienden la estrategia del negocio."',
    initials: 'MR',
    name: 'Mateo Ramos',
    role: 'Founder en CommerceX',
    avatarClass: 'bg-purple-500/30 border-purple-500 text-purple-400',
  },
]

export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: '¿Cuánto tiempo toma desarrollar una aplicación o sitio web?',
    answer:
      'El tiempo varía según la complejidad del proyecto. Una Landing Page o sitio corporativo toma aproximadamente de 2 a 3 semanas. Una aplicación web SaaS o móvil a medida suele tomar entre 6 y 10 semanas con fases claras de prototipado, desarrollo e integración.',
  },
  {
    question: '¿Cómo es el proceso de trabajo en VOLKANEXT?',
    answer:
      'Trabajamos con metodología ágil (Scrum). Iniciamos con una reunión de descubrimiento, diseñamos los prototipos en Figma, programamos en sprints semanales con demos en vivo y realizamos un despliegue seguro en la nube.',
  },
  {
    question: '¿Entregan el código fuente y derechos del proyecto?',
    answer:
      'Sí, el 100% de la propiedad intelectual y el código fuente documentado en repositorios de Git son totalmente de tu propiedad al finalizar la entrega del proyecto.',
  },
  {
    question: '¿Ofrecen soporte y mantenimiento post-lanzamiento?',
    answer:
      'Ofrecemos 30 días de soporte de garantía gratuito tras el lanzamiento. Además, disponemos de planes mensuales de mantenimiento, actualizaciones y monitoreo de servidores.',
  },
]

export const contact = {
  email: 'hola@volkanext.com',
  phone: '+51 981 658 221',
  phoneHref: 'tel:+51981658221',
  location: 'Arequipa, Perú — Alcance Global',
}

export const socials: { icon: string; href: string; label: string }[] = [
  { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
  { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'fa-brands fa-x-twitter', href: '#', label: 'X' },
  { icon: 'fa-brands fa-instagram', href: '#', label: 'Instagram' },
]

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
