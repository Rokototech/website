import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import faviconUrl from './assets/icon/logoMin.ico'

const favicon = document.createElement('link')
favicon.rel = 'icon'
favicon.href = faviconUrl
document.head.appendChild(favicon)

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
