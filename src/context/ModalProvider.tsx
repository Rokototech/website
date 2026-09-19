import { useCallback, useMemo, useState, type ReactNode } from 'react'
import {
  ModalContext,
  type ModalContextValue,
  type ModalPayload,
} from './modal-context'

export function ModalProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ModalPayload>(null)

  const openService = useCallback((serviceKey: string) => {
    setContent({ kind: 'service', serviceKey })
  }, [])

  const openProject = useCallback((projectId: number) => {
    setContent({ kind: 'project', projectId })
  }, [])

  const alert = useCallback((title: string, text: string) => {
    setContent({ kind: 'alert', title, text })
  }, [])

  const close = useCallback(() => setContent(null), [])

  const scrollToContact = useCallback(() => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const value = useMemo<ModalContextValue>(
    () => ({
      content,
      openService,
      openProject,
      alert,
      close,
      scrollToContact,
    }),
    [content, openService, openProject, alert, close, scrollToContact],
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
