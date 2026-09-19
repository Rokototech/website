import { createContext } from 'react'

export type ModalPayload =
  | { kind: 'service'; serviceKey: string }
  | { kind: 'project'; projectId: number }
  | { kind: 'alert'; title: string; text: string }
  | null

export interface ModalContextValue {
  content: ModalPayload
  openService: (serviceKey: string) => void
  openProject: (projectId: number) => void
  alert: (title: string, text: string) => void
  close: () => void
  scrollToContact: () => void
}

export const ModalContext = createContext<ModalContextValue | null>(null)