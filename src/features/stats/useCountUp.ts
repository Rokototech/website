import { useEffect, useState } from 'react'

export function useCountUp(target: number, active: boolean, speed = 30) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    let count = 0
    const step = target / 30

    const timer = window.setInterval(() => {
      count += step
      if (count < target) {
        setValue(Math.ceil(count))
      } else {
        setValue(target)
        window.clearInterval(timer)
      }
    }, speed)

    return () => window.clearInterval(timer)
  }, [active, target, speed])

  return value
}
