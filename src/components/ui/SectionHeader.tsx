import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  label: string
  title: string
  description?: string
  className?: string
}

const SectionHeader = ({ label, title, description, className }: SectionHeaderProps) => (
  <div className={cn('mb-12', className)}>
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-1)]">
      {label}
    </p>
    <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 max-w-xl text-[var(--color-muted)]">{description}</p>
    )}
  </div>
)

export { SectionHeader }
