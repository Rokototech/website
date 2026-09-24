import { ModalProvider } from '@/features/modal/ModalProvider'
import { Modal } from '@/features/modal/Modal'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { Hero } from '@/features/hero/Hero'
import { StatsSection } from '@/features/stats/StatsSection'
import { Services } from '@/features/services/Services'
import { Portfolio } from '@/features/portfolio/Portfolio'
import { Calculator } from '@/features/calculator/Calculator'
import { Testimonials } from '@/features/testimonials/Testimonials'
import { Faq } from '@/features/faq/Faq'
import { Contact } from '@/features/contact/Contact'
import { Footer } from '@/components/layout/Footer/Footer'

function App() {
  return (
    <ModalProvider>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <Services />
        <Portfolio />
        <Calculator />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Modal />
    </ModalProvider>
  )
}

export default App
