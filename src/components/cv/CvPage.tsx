'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { profile, experiences, education, skillCategories, featuredProjects, about } from '@/lib/data/profile'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

type CvPageProps = {
  locale: 'vi' | 'en'
}

const CvPage = ({ locale }: CvPageProps) => {
  const t = useTranslations('cv')

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="relative z-10 mx-auto max-w-4xl px-6 py-20">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <SectionHeader label={t('label')} title={t('title')} description={t('subtitle')} className="mb-0" />
        <button
          type="button"
          onClick={handlePrint}
          className="rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 print:hidden"
        >
          {t('download')}
        </button>
      </div>

      <div id="cv-content" className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-12 print:border-0 print:bg-white print:text-black print:shadow-none">
        <header className="border-b border-[var(--color-border)] pb-8 print:border-gray-200">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight print:text-black">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg font-semibold text-[var(--color-accent-1)] print:text-blue-600">
            {profile.role[locale]} · {profile.experienceYears} {locale === 'vi' ? 'năm kinh nghiệm' : 'years experience'}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] print:text-gray-600">
            {about[locale]}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] print:text-gray-700">
              <Mail size={16} className="text-[var(--color-accent-1)] print:text-blue-600" />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] print:text-gray-700">
              <Phone size={16} className="text-[var(--color-accent-1)] print:text-blue-600" />
              {profile.phone}
            </a>
            <span className="flex items-center gap-2 text-sm text-[var(--color-muted)] print:text-gray-700">
              <MapPin size={16} className="text-[var(--color-accent-1)] print:text-blue-600" />
              {profile.location[locale]}
            </span>
            <span className="flex items-center gap-2 text-sm text-[var(--color-muted)] print:text-gray-700">
              <Calendar size={16} className="text-[var(--color-accent-1)] print:text-blue-600" />
              {profile.birthDate}
            </span>
          </div>
        </header>

        {/* Experience — prominent */}
        <section className="mt-10">
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wider text-[var(--color-accent-1)] print:text-blue-600">
            {t('experience')}
          </h2>
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.period.vi} className="relative border-l-2 border-[var(--color-accent-1)] pl-8 print:border-blue-400">
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent-1)] print:border-white print:bg-blue-600" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold print:text-black">{exp.role[locale]}</h3>
                  <span className="rounded-full bg-[rgba(124,58,237,0.12)] px-3 py-0.5 text-xs font-semibold text-[var(--color-accent-1)] print:bg-blue-50 print:text-blue-700">
                    {exp.period[locale]}
                  </span>
                </div>
                <p className="mt-1 text-base font-semibold text-[var(--color-accent-2)] print:text-blue-700">
                  {exp.company[locale]}
                </p>
                <div className="mt-2 flex flex-wrap gap-1 print:hidden">
                  {exp.projects[locale].map((proj) => (
                    <span key={proj} className="rounded bg-[rgba(59,130,246,0.12)] px-2 py-0.5 text-[0.65rem] font-medium text-[#60a5fa]">
                      {proj}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.description[locale].map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-[var(--color-muted)] print:text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="rounded border border-[var(--color-border)] px-2 py-0.5 text-[0.65rem] text-[var(--color-muted)] print:border-gray-200 print:text-gray-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects — detailed */}
        <section className="mt-12">
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wider text-[var(--color-accent-1)] print:text-blue-600">
            {t('featuredProjects')}
          </h2>
          <div className="space-y-8">
            {featuredProjects.map((proj) => (
              <div key={proj.name} className="rounded-xl border border-[var(--color-border)] p-6 print:border-gray-200">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold print:text-black">
                    {proj.slug ? (
                      <Link href={`/projects/${proj.slug}`} className="hover:text-[var(--color-accent-1)] print:text-black">
                        {proj.name}
                      </Link>
                    ) : (
                      proj.name
                    )}
                  </h3>
                  <span className="text-xs font-medium text-[var(--color-muted)] print:text-gray-500">
                    {proj.period[locale]}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-[var(--color-accent-2)] print:text-blue-700">
                  {proj.company[locale]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)] print:text-gray-600">
                  {proj.description[locale]}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {proj.highlights[locale].map((item) => (
                    <li key={item} className="text-sm text-[var(--color-muted)] print:text-gray-600">
                      → {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {proj.tech.map((tech) => (
                    <span key={tech} className="rounded border border-[var(--color-border)] px-2 py-0.5 text-[0.65rem] text-[var(--color-muted)] print:border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wider text-[var(--color-accent-1)] print:text-blue-600">
            {t('education')}
          </h2>
          <h3 className="font-semibold print:text-black">{education.school[locale]}</h3>
          <p className="mt-1 text-sm text-[var(--color-muted)] print:text-gray-600">{education.major[locale]}</p>
        </section>

        <section className="mt-10">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wider text-[var(--color-accent-1)] print:text-blue-600">
            {t('skills')}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {skillCategories.map((cat) => (
              <div key={cat.label.en}>
                <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent-2)] print:text-blue-700">
                  {cat.label[locale]}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-muted)] print:border-gray-200 print:text-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <p className="mt-6 text-center text-sm text-[var(--color-muted)] print:hidden">
        <Link href="/projects" className="text-[var(--color-accent-1)] hover:underline">
          {locale === 'vi' ? 'Xem chi tiết dự án →' : 'View project details →'}
        </Link>
      </p>
    </div>
  )
}

export { CvPage }
