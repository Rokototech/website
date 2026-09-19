import { faqs } from '../data/content'
import { useFaq } from '../hooks/useFaq'

export function Faq() {
  const { openIndex, toggleItem } = useFaq()

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-3xl sm:text-4xl font-bold font-heading">
            Resolvemos tus dudas antes de comenzar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="glass-card rounded-xl overflow-hidden border border-brand-border"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left font-bold font-heading text-sm sm:text-base flex justify-between items-center text-white hover:text-brand-orange transition-colors"
                >
                  <span>{faq.question}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-brand-orange transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-brand-light-text leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}