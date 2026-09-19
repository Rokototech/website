import { useParticleCanvas } from '../hooks/useParticleCanvas'

export function Hero() {
  const canvasRef = useParticleCanvas()

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} id="hero-canvas"></canvas>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brand-orange/30 text-xs sm:text-sm font-medium text-gray-200 mb-8 shadow-glow animate-float">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
          <span>Agencia de Desarrollo de Software de Alto Rendimiento</span>
          <i className="fa-solid fa-chevron-right text-[10px] text-brand-orange"></i>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
          Ideas que se convierten en <br className="hidden sm:inline" />
          <span className="gradient-text-orange">soluciones digitales.</span>
        </h1>

        <p className="text-lg sm:text-xl text-brand-light-text max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          Diseñamos y desarrollamos software a medida, aplicaciones web complejas y plataformas
          móviles con arquitectura moderna, alta velocidad e impacto real de negocio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <a
            href="#proyectos"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-brand-orange text-white hover:bg-brand-orange-hover shadow-magma-lg transition-all hover:-translate-y-1 text-center flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-rocket"></i> Ver Proyectos
          </a>
          <a
            href="#calculadora"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold glass-card text-white hover:bg-white/10 transition-all hover:-translate-y-1 text-center border border-brand-border flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-calculator text-brand-orange"></i> Cotizar Proyecto
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm font-heading font-semibold uppercase tracking-widest text-gray-400">
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-lightbulb text-brand-orange"></i> IDEAS
          </span>
          <span className="text-brand-orange">•</span>
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-code text-brand-orange"></i> CODE
          </span>
          <span className="text-brand-orange">•</span>
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-chart-line text-brand-orange"></i> REAL IMPACT
          </span>
        </div>
      </div>
    </section>
  )
}