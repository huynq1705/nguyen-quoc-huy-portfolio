import { cn } from '@/lib/utils'
import { Link } from '@/i18n/navigation'
import type { Project } from '@/lib/data/projects'

type ProjectCardProps = {
  project: Project
  locale: 'vi' | 'en'
  viewLabel: string
  categoryLabel: string
  className?: string
}

const categoryColors = {
  ai: 'bg-[rgba(124,58,237,0.15)] text-[#a78bfa]',
  enterprise: 'bg-[rgba(59,130,246,0.15)] text-[#60a5fa]',
  cms: 'bg-[rgba(6,182,212,0.15)] text-[#22d3ee]',
}

const ProjectCard = ({ project, locale, viewLabel, categoryLabel, className }: ProjectCardProps) => (
  <Link
    href={`/projects/${project.slug}`}
    className={cn(
      'group relative flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(124,58,237,0.3)] hover:shadow-[0_0_80px_rgba(124,58,237,0.15)]',
      className
    )}
    tabIndex={0}
    aria-label={`${project.title[locale]} — ${viewLabel}`}
  >
    <span className={cn('mb-3 inline-block w-fit rounded-md px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider', categoryColors[project.category])}>
      {categoryLabel}
    </span>
    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
      {project.title[locale]}
    </h3>
    <p className="mt-2 text-sm text-[var(--color-muted)]">{project.tagline[locale]}</p>
    <p className="mt-1 text-xs text-[var(--color-muted)] opacity-60">{project.period[locale]}</p>
    <div className="mt-4 flex flex-wrap gap-1.5">
      {project.tech.slice(0, 4).map((t) => (
        <span key={t} className="rounded-md border border-[var(--color-border)] bg-white/5 px-2 py-0.5 text-[0.65rem] text-[var(--color-muted)]">
          {t}
        </span>
      ))}
    </div>
    <span className="mt-auto pt-5 text-sm font-medium text-[var(--color-accent-1)] opacity-0 transition-opacity group-hover:opacity-100">
      {viewLabel} →
    </span>
  </Link>
)

export { ProjectCard }
