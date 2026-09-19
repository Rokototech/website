import { useEffect } from 'react'
import { services, projects } from '../data/content'
import { useModal } from '../hooks/useModal'

export function Modal() {
  const { content, close, scrollToContact } = useModal()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [close])

  if (!content) return null

  const handleRequest = () => {
    close()
    setTimeout(scrollToContact, 50)
  }

  const renderContent = () => {
    if (content.kind === 'service') {
      const service = services.find((s) => s.key === content.serviceKey)
      if (!service) return null

      return (
        <>
          <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange text-2xl mb-4">
            <i className={`${service.icon} font-bold`}></i>
          </div>
          <h3 className="text-2xl font-bold font-heading text-white mb-3">{service.modalTitle}</h3>
          <p className="text-brand-light-text text-sm mb-6 leading-relaxed">{service.modalDesc}</p>
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase text-gray-400 mb-2">
              Tecnologías recomendadas:
            </div>
            <div className="flex flex-wrap gap-2">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/10 text-xs text-white font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={handleRequest}
            className="w-full py-3.5 rounded-xl bg-brand-orange text-white font-bold text-sm shadow-magma"
          >
            Solicitar Propuesta para este Servicio
          </button>
        </>
      )
    }

    if (content.kind === 'project') {
      const project = projects.find((p) => p.id === content.projectId)
      if (!project) return null

      return (
        <>
          <span className="text-xs font-bold uppercase text-brand-orange tracking-widest">
            {project.client}
          </span>
          <h3 className="text-2xl font-bold font-heading text-white mt-1 mb-4">
            {project.modalTitle}
          </h3>
          <p className="text-brand-light-text text-sm mb-4 leading-relaxed">{project.modalDesc}</p>
          <div className="p-4 rounded-xl bg-brand-orange/10 border border-brand-orange/30 mb-6">
            <span className="text-xs font-bold text-brand-orange uppercase block mb-1">
              Impacto de Negocio:
            </span>
            <span className="text-sm font-semibold text-white">{project.impact}</span>
          </div>
          <button
            onClick={close}
            className="w-full py-3 rounded-xl bg-brand-orange text-white font-bold text-sm shadow-magma"
          >
            Cerrar Detalle
          </button>
        </>
      )
    }

    return (
      <>
        <h3 className="text-2xl font-bold font-heading text-white mb-3">{content.title}</h3>
        <p className="text-brand-light-text text-sm mb-6">{content.text}</p>
        <button
          onClick={close}
          className="w-full py-3 rounded-xl bg-brand-orange text-white font-bold text-sm shadow-magma"
        >
          Aceptar
        </button>
      </>
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all"
      onClick={close}
    >
      <div
        className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-brand-orange/40 relative animate-float"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        {renderContent()}
      </div>
    </div>
  )
}
