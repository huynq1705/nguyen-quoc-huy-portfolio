'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { about, skillCategories } from '@/lib/data/profile'
import { featuredProjects } from '@/lib/data/projects'
import { ExperienceSection } from '@/components/experience/ExperienceSection'
import { ProjectsSection } from '@/components/projects/ProjectsSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

type HeroProps = {
  locale: 'vi' | 'en'
}

const expertiseKeys = ['ai', 'editors', 'enterprise', 'i18n'] as const

const Hero = ({ locale }: HeroProps) => {
  const t = useTranslations('hero')
  const ts = useTranslations('stats')
  const tAbout = useTranslations('about')
  const tExpertise = useTranslations('expertise')
  const tExpertiseItems = useTranslations('expertise.items')
  const tProjects = useTranslations('projects')
  const tTech = useTranslations('tech')

  const [displayText, setDisplayText] = useState('')
  const fullText = t('titleAccent')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [fullText])

  const stats = [
    { num: '7', label: ts('projects') },
    { num: '3+', label: ts('experience') },
    { num: '2', label: ts('ecosystems') },
    { num: 'EN/JA', label: ts('i18n') },
  ]

  return (
    <>
      <section className="relative z-10 px-6 pb-20 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(124,58,237,0.3)] bg-[rgba(124,58,237,0.12)] px-5 py-2 text-sm font-semibold">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--color-accent-4)]" />
            <span className="text-[var(--color-text)]">{t('eyebrow')}</span>
            <span className="gradient-text font-bold">· 3+ {locale === 'vi' ? 'năm' : 'yrs'}</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            {t('title')}
            <br />
            <span className="gradient-text">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-muted)]">
            {t('subtitle')}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              {t('ctaProjects')}
            </Link>
            <Link
              href="/cv"
              className="rounded-full border border-[var(--color-border)] px-7 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent-1)]"
            >
              {t('ctaCv')}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--color-border)] px-7 py-3 text-sm font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {t('ctaContact')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {stats.map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-[family-name:var(--font-display)] text-3xl font-extrabold gradient-text">
                {num}
              </div>
              <div className="mt-1 text-xs text-[var(--color-muted)]">{label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <SectionHeader label={tAbout('label')} title={tAbout('title')} />
        <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-muted)]">
          {about[locale]}
        </p>
      </section>

      <ExperienceSection locale={locale} />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <SectionHeader label={tExpertise('label')} title={tExpertise('title')} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseKeys.map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[rgba(124,58,237,0.3)]"
            >
              <h3 className="font-[family-name:var(--font-display)] font-bold">
                {tExpertiseItems(`${key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {tExpertiseItems(`${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            label={tProjects('label')}
            title={tProjects('title')}
            description={tProjects('subtitle')}
            className="mb-0"
          />
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-[var(--color-accent-1)] hover:underline"
          >
            {tProjects('viewAll')} →
          </Link>
        </div>
      </section>

      <ProjectsSection
        projects={featuredProjects}
        locale={locale}
        showHeader={false}
      />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <SectionHeader label={tTech('label')} title={tTech('title')} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.label.en}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[rgba(124,58,237,0.3)]"
            >
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--color-accent-1)]">
                {cat.label[locale]}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[var(--color-border)] bg-white/5 px-2 py-0.5 text-[0.7rem] text-[var(--color-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export { Hero }
