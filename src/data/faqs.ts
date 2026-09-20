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
