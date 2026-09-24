import { useCallback, useMemo, useState } from 'react'
import {
  projectCatalog,
  projectTypeOptions,
  type Presupuesto,
  type ProjectType,
  type PuntoPartida,
  type Urgencia,
} from '@/data/calculator'

export const NOT_SURE_EXTRA = '🤷 No estoy seguro, ayúdenme'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type ContactData = {
  nombre: string
  email: string
  whatsapp: string
  mensaje: string
}

export const initialContact: ContactData = {
  nombre: '',
  email: '',
  whatsapp: '',
  mensaje: '',
}

export function useConfigurator() {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState<ProjectType | null>(null)
  const [extras, setExtras] = useState<string[]>([])
  const [notSure, setNotSure] = useState(false)
  const [puntoPartida, setPuntoPartida] = useState<PuntoPartida | null>(null)
  const [presupuesto, setPresupuesto] = useState<Presupuesto | null>(null)
  const [urgencia, setUrgencia] = useState<Urgencia | null>(null)
  const [contacto, setContacto] = useState<ContactData>(initialContact)

  const selectProjectType = useCallback((type: ProjectType) => {
    setProjectType(type)
    setExtras([])
    setNotSure(false)
  }, [])

  const toggleExtra = useCallback((extra: string) => {
    setNotSure(false)
    setExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra],
    )
  }, [])

  const toggleNotSure = useCallback(() => {
    setNotSure((prev) => {
      const next = !prev
      if (next) setExtras([])
      return next
    })
  }, [])

  const updateContact = useCallback(
    (field: keyof ContactData, value: string) => {
      setContacto((prev) => ({ ...prev, [field]: value }))
    },
    [],
  )

  const catalog = useMemo(
    () => (projectType ? projectCatalog[projectType] : null),
    [projectType],
  )

  const selectedExtras = useMemo(
    () => (notSure ? [] : extras),
    [notSure, extras],
  )

  const tipoTitle = useMemo(
    () =>
      projectTypeOptions.find((o) => o.type === projectType)?.title ?? null,
    [projectType],
  )

  const isStepValid = useMemo(() => {
    switch (step) {
      case 1:
        return projectType !== null
      case 2:
        return true
      case 3:
        return puntoPartida !== null
      case 4:
        return presupuesto !== null && urgencia !== null
      case 5:
        return (
          contacto.nombre.trim().length > 0 &&
          EMAIL_REGEX.test(contacto.email.trim())
        )
      default:
        return false
    }
  }, [step, projectType, puntoPartida, presupuesto, urgencia, contacto])

  const nextStep = useCallback(() => {
    if (!isStepValid) return
    setStep((s) => Math.min(5, s + 1))
  }, [isStepValid])

  const prevStep = useCallback(() => setStep((s) => Math.max(1, s - 1)), [])

  const reset = useCallback(() => {
    setStep(1)
    setProjectType(null)
    setExtras([])
    setNotSure(false)
    setPuntoPartida(null)
    setPresupuesto(null)
    setUrgencia(null)
    setContacto(initialContact)
  }, [])

  return {
    step,
    nextStep,
    prevStep,
    reset,
    projectType,
    selectProjectType,
    catalog,
    extras: selectedExtras,
    toggleExtra,
    notSure,
    toggleNotSure,
    tipoTitle,
    puntoPartida,
    setPuntoPartida,
    presupuesto,
    setPresupuesto,
    urgencia,
    setUrgencia,
    contacto,
    updateContact,
    isStepValid,
  }
}