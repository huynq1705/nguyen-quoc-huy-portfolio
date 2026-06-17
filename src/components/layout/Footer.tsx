'use client'

import { useTranslations } from 'next-intl'
import { profile } from '@/lib/data/profile'

const Footer = () => {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-[var(--color-border)] py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-[var(--color-muted)]">{t('built')}</p>
        <p className="mt-2 text-xs text-[var(--color-muted)] opacity-60">
          © {year} {profile.name}. {t('rights')}
        </p>
      </div>
    </footer>
  )
}

export { Footer }
