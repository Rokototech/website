import { projectTypeOptions, featureOptions, timelineOptions } from '../data/content'
import { useCalculator } from '../hooks/useCalculator'

const steps = [
  { label: 'Tipo de Proyecto' },
  { label: 'Funcionalidades' },
  { label: 'Plazos & Entrega' },
]

export function Calculator({ onApplyQuote }: { onApplyQuote: (message: string) => void }) {
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
      projectTypeOptions.find((o) => o.type === projectType)?.title ?? 'Proyecto'
    const priceText = `$${basePrice.toLocaleString()} - $${maxPrice.toLocaleString()} USD`
    const message = `Hola VOLKANEXT, solicito cotización para un proyecto de tipo: ${typeText}.\nInversión calculada: ${priceText}.\nMe gustaría agendar una llamada de descubrimiento.`

    onApplyQuote(message)
  }

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider border border-brand-orange/30">
            Cotización Interactiva
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight mt-4 mb-3">
            Calculadora de Proyecto
          </h2>
          <p className="text-brand-light-text text-sm sm:text-base max-w-2xl mx-auto">
            Selecciona las especificaciones de tu proyecto para obtener una estimación aproximada de
            tiempo e inversión instantánea.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-brand-orange/30 shadow-magma-lg">
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6 text-xs sm:text-sm font-heading">
            {steps.map((s, index) => (
              <div key={s.label} className="flex items-center flex-1 last:flex-none">
                <div className={`font-semibold flex items-center gap-2 ${getStepStyle(index)}`}>
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${getStepNumberStyle(index)}`}
                  >
                    {index + 1}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </div>
                {index < steps.length - 1 && <div className="h-0.5 flex-1 bg-white/10 mx-3"></div>}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div>
              <h3 className="text-lg font-bold font-heading mb-4 text-white">
                ¿Qué tipo de solución digital deseas construir?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projectTypeOptions.map((option) => (
                  <label
                    key={option.type}
                    className={`glass-card p-5 rounded-xl cursor-pointer border transition-all flex flex-col items-center text-center group ${
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
                    <i className={`${option.icon} text-3xl text-brand-orange mb-3 group-hover:scale-110 transition-transform`}></i>
                    <span className="font-bold font-heading text-white text-sm">{option.title}</span>
                    <span className="text-[11px] text-brand-light-text mt-1">{option.desc}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-bold font-heading mb-4 text-white">
                Selecciona las funcionalidades requeridas:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featureOptions.map((option) => (
                  <label
                    key={option.key}
                    className={`glass-card p-4 rounded-xl flex items-center gap-3 cursor-pointer border transition-all ${
                      features.includes(option.key)
                        ? 'border-brand-orange'
                        : 'border-brand-border hover:border-brand-orange'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="accent-brand-orange w-5 h-5"
                      checked={features.includes(option.key)}
                      onChange={() => toggleFeature(option.key)}
                    />
                    <div>
                      <div className="font-bold text-sm text-white">{option.title}</div>
                      <div className="text-xs text-brand-light-text">{option.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-bold font-heading mb-4 text-white">
                ¿Cuál es el tiempo estimado de entrega deseado?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {timelineOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`glass-card p-5 rounded-xl cursor-pointer border text-center transition-all ${
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
                    <i className={`${option.icon} ${option.iconClass} text-2xl mb-2`}></i>
                    <div className="font-bold text-sm text-white">{option.title}</div>
                    <div className="text-[11px] text-brand-light-text">{option.desc}</div>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-light-text">
                Inversión Estimada Aproximada
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-heading text-brand-orange">
                ${basePrice.toLocaleString()} - ${maxPrice.toLocaleString()} USD
              </div>
              <div className="text-[11px] text-gray-400 mt-1">
                <i className="fa-solid fa-stopwatch mr-1"></i> Tiempo de desarrollo aprox: {timeMin} a{' '}
                {timeMax} semanas
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="px-5 py-3 rounded-xl border border-brand-border text-xs font-semibold hover:bg-white/5 transition-all"
                >
                  Anterior
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={nextStep}
                  className="flex-1 md:flex-initial px-6 py-3 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-magma hover:bg-brand-orange-hover transition-all"
                >
                  Siguiente Paso <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              ) : (
                <button
                  onClick={handleApplyQuote}
                  className="flex-1 md:flex-initial px-6 py-3 rounded-xl bg-green-600 text-white text-xs font-bold shadow-lg hover:bg-green-700 transition-all"
                >
                  Solicitar Cotización con este Plan <i className="fa-solid fa-check ml-2"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}