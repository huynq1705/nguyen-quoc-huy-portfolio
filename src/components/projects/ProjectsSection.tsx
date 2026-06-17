'use client'

import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/data/projects'
import { ProjectShowcase } from '@/components/projects/ProjectShowcase'
import { SectionHeader } from '@/components/ui/SectionHeader'

type ProjectsSectionProps = {
  projects: Project[]
  locale: 'vi' | 'en'
  showHeader?: boolean
}

const ProjectsSection = ({ projects, locale, showHeader = true }: ProjectsSectionProps) => {
  const t = useTranslations('projects')

  return (
    <section className={cn('relative z-10 mx-auto max-w-6xl px-6 pb-20', showHeader ? 'pt-20' : 'pt-0')}>
      {showHeader && (
        <SectionHeader label={t('label')} title={t('title')} description={t('subtitle')} />
      )}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectShowcase
            key={project.slug}
            project={project}
            locale={locale}
            index={index}
            labels={{
              category: t(`category.${project.category}`),
              highlights: t('highlights'),
              tech: t('tech'),
              impact: t('impact'),
              role: t('role'),
            }}
          />
        ))}
      </div>
    </section>
  )
}

export { ProjectsSection }
