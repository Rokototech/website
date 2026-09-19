import { usePortfolioFilter } from '../hooks/usePortfolioFilter'
import { useModal } from '../hooks/useModal'

const activeStyles = 'bg-brand-orange text-white shadow-magma'
const inactiveStyles = 'glass-card text-gray-300 hover:text-white'

export function Portfolio() {
  const { filter, setFilter, filteredProjects, filters } = usePortfolioFilter()
  const { openProject } = useModal()

  return (
    <section id="proyectos" className="py-24 bg-brand-card/20 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
              Casos de Éxito
            </h2>
            <p className="text-3xl sm:text-5xl font-bold font-heading tracking-tight">
              Proyectos Destacados
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  filter === f.key ? activeStyles : inactiveStyles
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group border border-brand-border"
            >
              <div className="relative overflow-hidden h-52 bg-gradient-to-br from-gray-900 to-black">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-brand-orange/90 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full backdrop-blur-md">
                  {project.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-brand-light-text text-xs leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-1 rounded bg-white/5 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openProject(project.id)}
                  className="w-full py-2.5 rounded-lg font-semibold text-xs border border-brand-orange/40 text-brand-orange hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Ver Detalles{' '}
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}