'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggleTheme()
    }
  }

  if (!mounted) {
    return (
      <div
        className="h-9 w-9 rounded-lg border border-[var(--color-border)] sm:h-9 sm:w-9"
        aria-hidden="true"
      />
    )
  }

  const isDark = (theme ?? resolvedTheme) === 'dark'

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      onKeyDown={handleKeyDown}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)]',
        'text-[var(--color-muted)] transition-colors',
        'hover:border-[var(--color-accent-1)] hover:text-[var(--color-text)]'
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      tabIndex={0}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}

export { ThemeToggle }
