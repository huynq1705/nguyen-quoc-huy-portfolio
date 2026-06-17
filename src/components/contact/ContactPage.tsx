'use client'

import { useTranslations } from 'next-intl'
import { profile } from '@/lib/data/profile'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Mail, Phone, MapPin } from 'lucide-react'

type ContactPageProps = {
  locale: 'vi' | 'en'
}

const ContactPage = ({ locale }: ContactPageProps) => {
  const t = useTranslations('contact')

  const contacts = [
    {
      icon: Mail,
      label: t('email'),
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: t('phone'),
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: MapPin,
      label: t('location'),
      value: profile.location[locale],
      href: undefined,
    },
  ]

  return (
    <div className="relative z-10 mx-auto max-w-2xl px-6 py-20">
      <SectionHeader label={t('label')} title={t('title')} description={t('subtitle')} />

      <div className="space-y-4">
        {contacts.map(({ icon: Icon, label, value, href }) => (
          <div
            key={label}
            className="flex items-center gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[rgba(124,58,237,0.3)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(124,58,237,0.15)]">
              <Icon size={20} className="text-[var(--color-accent-1)]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="mt-1 block text-lg font-medium transition-colors hover:text-[var(--color-accent-1)]"
                  tabIndex={0}
                  aria-label={`${label}: ${value}`}
                >
                  {value}
                </a>
              ) : (
                <p className="mt-1 text-lg font-medium">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={`mailto:${profile.email}?subject=${encodeURIComponent(locale === 'vi' ? 'Liên hệ từ Portfolio' : 'Contact from Portfolio')}`}
          className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          tabIndex={0}
          aria-label={t('send')}
        >
          {t('send')}
        </a>
      </div>
    </div>
  )
}

export { ContactPage }
