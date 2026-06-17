'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { experiences } from '@/lib/data/profile'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Briefcase } from 'lucide-react'

type ExperienceSectionProps = {
  locale: 'vi' | 'en'
}

const ExperienceSection = ({ locale }: ExperienceSectionProps) => {
  const t = useTranslations('experience')

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <SectionHeader label={t('label')} title={t('title')} description={t('subtitle')} />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.period.vi}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-card-hover-border)] hover:shadow-[var(--shadow-glow)] md:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-card-hover-gradient)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-icon-bg)]">
                  <Briefcase size={22} className="text-[var(--color-accent-1)]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">
                    {exp.role[locale]}
                  </h3>
                  <p className="mt-0.5 text-base font-semibold text-[var(--color-accent-2)]">
                    {exp.company[locale]}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {exp.projects[locale].map((proj) => (
                      <span
                        key={proj}
                        className="rounded-md bg-[var(--color-tag-bg)] px-2 py-0.5 text-[0.65rem] font-medium text-[var(--color-tag-text)]"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-period-badge-bg)] px-3 py-1 text-xs font-semibold text-[var(--color-muted)]">
                {exp.period[locale]}
              </span>
            </div>

            <ul className="relative mt-5 space-y-2 border-t border-[var(--color-border)] pt-5">
              {exp.description[locale].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-1)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--color-chip-border)] bg-[var(--color-chip-bg)] px-2 py-0.5 text-[0.65rem] text-[var(--color-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/cv"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-1)] transition-colors hover:underline"
        >
          {t('viewCv')} →
        </Link>
      </div>
    </section>
  )
}

export { ExperienceSection }
