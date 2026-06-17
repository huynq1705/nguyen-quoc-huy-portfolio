'use client'

import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { profile } from '@/lib/data/profile'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navItems = [
  { href: '/', key: 'home' },
  { href: '/projects', key: 'projects' },
  { href: '/cv', key: 'cv' },
  { href: '/contact', key: 'contact' },
] as const

const Navbar = () => {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const locale = useLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMenuOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleToggleLocale = () => {
    const next = locale === 'vi' ? 'en' : 'vi'
    window.location.href = `/${next}${pathname}`
  }

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleKeyDownMenu = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggleMenu()
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-nav-bg)] backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="min-w-0 shrink font-[family-name:var(--font-display)] text-sm font-extrabold leading-tight gradient-text sm:text-base md:text-lg"
          aria-label={profile.name}
        >
          <span className="block truncate sm:whitespace-normal">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map(({ href, key }) => (
            <li key={key}>
              <Link
                href={href}
                className={cn(
                  'text-sm transition-colors',
                  pathname === href
                    ? 'font-medium text-[var(--color-text)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                )}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={handleToggleLocale}
            className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent-1)] hover:text-[var(--color-text)] sm:px-3 sm:py-1.5 sm:text-xs"
            aria-label="Toggle language"
          >
            {locale === 'vi' ? 'EN' : 'VI'}
          </button>

          <button
            type="button"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDownMenu}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent-1)] hover:text-[var(--color-text)] lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-nav-mobile-bg)] backdrop-blur-xl transition-all duration-300 lg:hidden',
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-t-transparent'
        )}
      >
        <ul className="flex flex-col px-4 py-3 sm:px-6">
          {navItems.map(({ href, key }) => (
            <li key={key}>
              <Link
                href={href}
                className={cn(
                  'block rounded-lg px-3 py-3 text-sm transition-colors',
                  pathname === href
                    ? 'bg-[var(--color-accent-soft)] font-medium text-[var(--color-text)]'
                    : 'text-[var(--color-muted)] hover:bg-[var(--color-hover-surface)] hover:text-[var(--color-text)]'
                )}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export { Navbar }
