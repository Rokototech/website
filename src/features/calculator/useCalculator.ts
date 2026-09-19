import { useCallback, useMemo, useState } from 'react'
import type { FeatureKey, ProjectType, TimelineType } from '../../data/content'

interface Estimate {
  basePrice: number
  maxPrice: number
  timeMin: number
  timeMax: number
}

const BASE_PRICES: Record<ProjectType, Estimate> = {
  web: { basePrice: 1200, maxPrice: 2200, timeMin: 2, timeMax: 4 },
  webapp: { basePrice: 2500, maxPrice: 4500, timeMin: 4, timeMax: 6 },
  mobile: { basePrice: 3000, maxPrice: 5500, timeMin: 5, timeMax: 8 },
  software: { basePrice: 4500, maxPrice: 9000, timeMin: 6, timeMax: 12 },
  ecommerce: { basePrice: 1800, maxPrice: 3500, timeMin: 3, timeMax: 5 },
  ai: { basePrice: 2800, maxPrice: 6000, timeMin: 4, timeMax: 7 },
}

const FEATURE_PRICE_STEP = 400
const FEATURE_MAX_STEP = 800

export function useCalculator() {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState<ProjectType>('web')
  const [features, setFeatures] = useState<FeatureKey[]>([])
  const [timeline, setTimeline] = useState<TimelineType>('standard')

  const toggleFeature = useCallback((key: FeatureKey) => {
    setFeatures((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key],
    )
  }, [])

  const nextStep = useCallback(() => setStep((s) => Math.min(3, s + 1)), [])
  const prevStep = useCallback(() => setStep((s) => Math.max(1, s - 1)), [])

  const estimate = useMemo<Estimate>(() => {
    const base = BASE_PRICES[projectType]
    let { basePrice, maxPrice, timeMin, timeMax } = base

    features.forEach(() => {
      basePrice += FEATURE_PRICE_STEP
      maxPrice += FEATURE_MAX_STEP
      timeMax += 1
    })

    if (timeline === 'urgent') {
      basePrice = Math.round(basePrice * 1.25)
      maxPrice = Math.round(maxPrice * 1.25)
      timeMin = Math.max(1, timeMin - 1)
      timeMax = Math.max(2, timeMax - 2)
    }

    return { basePrice, maxPrice, timeMin, timeMax }
  }, [projectType, features, timeline])

  return {
    step,
    nextStep,
    prevStep,
    projectType,
    setProjectType,
    features,
    toggleFeature,
    timeline,
    setTimeline,
    estimate,
  }
}
