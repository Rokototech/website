import { stats, techStack } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'

function Counter({ value, suffix = '', active, accent }: { value: number; suffix?: string; active: boolean; accent?: boolean }) {
  const count = useCountUp(value, active)
  return (
    <div
      className={`text-3xl sm:text-5xl font-bold font-heading mb-2 flex justify-center items-center ${
        accent ? 'text-brand-orange' : 'text-white'
      }`}
    >
      <span>{count}</span>
      {suffix}
    </div>
  )
}

export function StatsSection() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="py-16 bg-brand-card/40 border-y border-brand-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                accent={stat.accent}
                active={inView}
              />
              <p className="text-xs sm:text-sm text-brand-light-text uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-brand-light-text mb-6 font-semibold">
            Tecnologías Principales con las que Construimos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-gray-300">
            {techStack.map((tech) => (
              <span
                key={tech.label}
                className="glass-card px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
              >
                <i className={`${tech.icon} ${tech.iconClass}`}></i> {tech.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}