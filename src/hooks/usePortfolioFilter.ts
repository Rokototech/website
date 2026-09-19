import { useMemo, useState } from 'react'
import { projects, type Project, type ProjectFilter } from '../data/content'

export function usePortfolioFilter() {
  const [filter, setFilter] = useState<ProjectFilter>('all')

  const filteredProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  const filters: { key: ProjectFilter; label: string }[] = [
    { key: 'all', label: 'Todos' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Apps Móviles' },
    { key: 'enterprise', label: 'Enterprise' },
  ]

  return { filter, setFilter, filteredProjects, filters }
}

export type { Project }