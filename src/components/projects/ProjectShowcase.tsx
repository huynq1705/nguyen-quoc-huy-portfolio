'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/lib/data/projects'
import { ProjectVisual } from '@/components/projects/ProjectVisual'
import { cn } from '@/lib/utils'
import { Sparkles, Zap, Target } from 'lucide-react'

type ProjectShowcaseProps = {
  project: Project
  locale: 'vi' | 'en'
  index: number
  labels: {
    category: string
    highlights: string
    tech: string
    impact: string
    role: string
  }
}

const categoryColors = {
  ai: 'from-violet-500/20 to-blue-500/10 border-violet-500/20',
  enterprise: 'from-blue-500/20 to-cyan-500/10 border-blue-500/20',
  cms: 'from-cyan-500/20 to-lime-500/10 border-cyan-500/20',
}

const categoryBadge = {
  ai: 'bg-violet-500/15 text-violet-300',
  enterprise: 'bg-blue-500/15 text-blue-300',
  cms: 'bg-cyan-500/15 text-cyan-300',
}

const ProjectShowcase = ({ project, locale, index, labels }: ProjectShowcaseProps) => {
  const isReversed = index % 2 === 1

  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: 0.05 }}
      className={cn(
        'overflow-hidden rounded-3xl border bg-gradient-to-br',
        categoryColors[project.category]
      )}
    >
      <div
        className={cn(
          'grid items-stretch gap-0 lg:grid-cols-2',
          isReversed && 'lg:[direction:rtl] lg:*:[direction:ltr]'
        )}
      >
        {/* Visual panel */}
        <div className="p-5 sm:p-6 lg:p-8">
          <ProjectVisual slug={project.slug} category={project.category} />
        </div>

        {/* Content panel */}
        <div className="flex flex-col justify-center border-t border-white/5 p-6 sm:p-8 lg:border-l lg:border-t-0">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className={cn('rounded-md px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider', categoryBadge[project.category])}>
              {labels.category}
            </span>
            <span className="text-xs text-[var(--color-muted)]">{project.period[locale]}</span>
            {project.featured && (
              <span className="flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-[0.65rem] font-semibold text-amber-300">
                <Sparkles size={10} />
                Featured
              </span>
            )}
          </div>

          <h3 className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight sm:text-3xl">
            {project.title[locale]}
          </h3>
          <p className="mt-1 text-base font-medium text-[var(--color-accent-2)]">
            {project.tagline[locale]}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
            {project.description[locale]}
          </p>

          <div className="mt-5 rounded-xl bg-black/20 p-4 ring-1 ring-white/5">
            <p className="mb-1 flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-accent-1)]">
              <Target size={11} />
              {labels.role}
            </p>
            <p className="text-sm text-[var(--color-muted)]">{project.role[locale]}</p>
          </div>

          <div className="mt-5">
            <p className="mb-2 flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-muted)]">
              <Zap size={11} />
              {labels.highlights}
            </p>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {project.highlights[locale].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-[var(--color-muted)]">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-1)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-muted)]">
              {labels.impact}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.impact[locale].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-[var(--color-text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/5 bg-black/20 px-2 py-0.5 text-[0.65rem] font-medium text-[var(--color-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export { ProjectShowcase }
