import { useCallback, useState } from 'react'
import { ModalProvider } from './context/ModalProvider'
import { Modal } from './components/Modal'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsSection } from './components/StatsSection'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Calculator } from './components/Calculator'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [quoteMessage, setQuoteMessage] = useState('')

  const handleApplyQuote = useCallback((message: string) => {
    setQuoteMessage(message)
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }, [])

  return (
    <ModalProvider>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <Services />
        <Portfolio />
        <Calculator onApplyQuote={handleApplyQuote} />
        <Testimonials />
        <Faq />
        <Contact quoteMessage={quoteMessage} />
      </main>
      <Footer />
      <Modal />
    </ModalProvider>
  )
}

export default App