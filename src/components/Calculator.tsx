import {
  projectTypeOptions,
  featureOptions,
  timelineOptions,
} from '../data/content'
import { useCalculator } from '../hooks/useCalculator'

const steps = [
  { label: 'Tipo de Proyecto' },
  { label: 'Funcionalidades' },
  { label: 'Plazos & Entrega' },
]

export function Calculator({
  onApplyQuote,
}: {
  onApplyQuote: (message: string) => void
}) {
  const {
    step,
    nextStep,
    prevStep,
    projectType,
    setProjectType,
    features,
    toggleFeature,
    timeline,
    setTimeline,
    estimate,
  } = useCalculator()

  const { basePrice, maxPrice, timeMin, timeMax } = estimate

  const getStepStyle = (index: number) => {
    if (index + 1 === step) return 'text-brand-orange'
    if (index + 1 < step) return 'text-green-400'
    return 'text-gray-500'
  }

  const getStepNumberStyle = (index: number) => {
    if (index + 1 === step) return 'bg-brand-orange text-white'
    if (index + 1 < step) return 'bg-green-500 text-white'
    return 'bg-gray-800 text-gray-400'
  }

  const handleApplyQuote = () => {
    const typeText =
      projectTypeOptions.find((o) => o.type === projectType)?.title ??
      'Proyecto'
    const priceText = `$${basePrice.toLocaleString()} - $${maxPrice.toLocaleString()} USD`
    const message = `Hola VOLKANEXT, solicito cotización para un proyecto de tipo: ${typeText}.\nInversión calculada: ${priceText}.\nMe gustaría agendar una llamada de descubrimiento.`

    onApplyQuote(message)
  }

  return (
    <section id="calculadora" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-[160px]"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="rounded-full border border-brand-orange/30 bg-brand-orange/20 px-3 py-1 text-xs font-semibold tracking-wider text-brand-orange uppercase">
            Cotización Interactiva
          </span>
          <h2 className="mt-4 mb-3 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Calculadora de Proyecto
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-brand-light-text sm:text-base">
            Selecciona las especificaciones de tu proyecto para obtener una
            estimación aproximada de tiempo e inversión instantánea.
          </p>
        </div>

        <div className="glass-card rounded-3xl border border-brand-orange/30 p-6 shadow-magma-lg sm:p-10">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6 font-heading text-xs sm:text-sm">
            {steps.map((s, index) => (
              <div
                key={s.label}
                className="flex flex-1 items-center last:flex-none"
              >
                <div
                  className={`flex items-center gap-2 font-semibold ${getStepStyle(index)}`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${getStepNumberStyle(index)}`}
                  >
                    {index + 1}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="mx-3 h-0.5 flex-1 bg-white/10"></div>
                )}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div>
              <h3 className="mb-4 font-heading text-lg font-bold text-white">
                ¿Qué tipo de solución digital deseas construir?
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {projectTypeOptions.map((option) => (
                  <label
                    key={option.type}
                    className={`glass-card group flex cursor-pointer flex-col items-center rounded-xl border p-5 text-center transition-all ${
                      projectType === option.type
                        ? 'border-brand-orange'
                        : 'border-brand-border hover:border-brand-orange'
                    }`}
                  >
                    <input
                      type="radio"
                      name="project_type"
                      value={option.type}
                      className="hidden"
                      checked={projectType === option.type}
                      onChange={() => setProjectType(option.type)}
                    />
                    <i
                      className={`${option.icon} mb-3 text-3xl text-brand-orange transition-transform group-hover:scale-110`}
                    ></i>
                    <span className="font-heading text-sm font-bold text-white">
                      {option.title}
                    </span>
                    <span className="mt-1 text-[11px] text-brand-light-text">
                      {option.desc}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="mb-4 font-heading text-lg font-bold text-white">
                Selecciona las funcionalidades requeridas:
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {featureOptions.map((option) => (
                  <label
                    key={option.key}
                    className={`glass-card flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all ${
                      features.includes(option.key)
                        ? 'border-brand-orange'
                        : 'border-brand-border hover:border-brand-orange'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-brand-orange"
                      checked={features.includes(option.key)}
                      onChange={() => toggleFeature(option.key)}
                    />
                    <div>
                      <div className="text-sm font-bold text-white">
                        {option.title}
                      </div>
                      <div className="text-xs text-brand-light-text">
                        {option.desc}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="mb-4 font-heading text-lg font-bold text-white">
                ¿Cuál es el tiempo estimado de entrega deseado?
              </h3>
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {timelineOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`glass-card cursor-pointer rounded-xl border p-5 text-center transition-all ${
                      timeline === option.value
                        ? 'border-brand-orange'
                        : 'border-brand-border hover:border-brand-orange'
                    }`}
                  >
                    <input
                      type="radio"
                      name="timeline"
                      value={option.value}
                      className="hidden"
                      checked={timeline === option.value}
                      onChange={() => setTimeline(option.value)}
                    />
                    <i
                      className={`${option.icon} ${option.iconClass} mb-2 text-2xl`}
                    ></i>
                    <div className="text-sm font-bold text-white">
                      {option.title}
                    </div>
                    <div className="text-[11px] text-brand-light-text">
                      {option.desc}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
            <div>
              <div className="text-xs tracking-wider text-brand-light-text uppercase">
                Inversión Estimada Aproximada
              </div>
              <div className="font-heading text-3xl font-bold text-brand-orange sm:text-4xl">
                ${basePrice.toLocaleString()} - ${maxPrice.toLocaleString()} USD
              </div>
              <div className="mt-1 text-[11px] text-gray-400">
                <i className="fa-solid fa-stopwatch mr-1"></i> Tiempo de
                desarrollo aprox: {timeMin} a {timeMax} semanas
              </div>
            </div>

            <div className="flex w-full items-center gap-3 md:w-auto">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="rounded-xl border border-brand-border px-5 py-3 text-xs font-semibold transition-all hover:bg-white/5"
                >
                  Anterior
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={nextStep}
                  className="flex-1 rounded-xl bg-brand-orange px-6 py-3 text-xs font-bold text-white shadow-magma transition-all hover:bg-brand-orange-hover md:flex-initial"
                >
                  Siguiente Paso{' '}
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              ) : (
                <button
                  onClick={handleApplyQuote}
                  className="flex-1 rounded-xl bg-green-600 px-6 py-3 text-xs font-bold text-white shadow-lg transition-all hover:bg-green-700 md:flex-initial"
                >
                  Solicitar Cotización con este Plan{' '}
                  <i className="fa-solid fa-check ml-2"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
