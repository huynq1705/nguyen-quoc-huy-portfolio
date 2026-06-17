import type { Project } from '@/lib/data/projects'
import type { JSX } from 'react'

type VisualComponent = () => JSX.Element

type ProjectVisualProps = {
  slug: string
  category: Project['category']
}

const accentByCategory = {
  ai: { from: '#7c3aed', to: '#3b82f6', glow: 'rgba(124,58,237,0.3)' },
  enterprise: { from: '#3b82f6', to: '#06b6d4', glow: 'rgba(59,130,246,0.3)' },
  cms: { from: '#06b6d4', to: '#84cc16', glow: 'rgba(6,182,212,0.3)' },
}

const McbuilderVisual = () => (
  <div className="flex h-full flex-col gap-3 p-4">
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-red-400/80" />
      <div className="h-2 w-2 rounded-full bg-yellow-400/80" />
      <div className="h-2 w-2 rounded-full bg-green-400/80" />
      <div className="ml-2 h-4 flex-1 rounded bg-white/5" />
    </div>
    <div className="flex flex-1 gap-3">
      <div className="w-16 space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-10 rounded-lg ${i === 1 ? 'bg-violet-500/40 ring-1 ring-violet-400/50' : 'bg-white/5'}`} />
        ))}
      </div>
      <div className="flex flex-1 flex-col rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="mb-3 h-3 w-2/3 rounded bg-gradient-to-r from-violet-400/60 to-blue-400/40" />
        <div className="flex-1 rounded-lg bg-gradient-to-br from-violet-900/30 to-blue-900/20 p-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="h-12 rounded bg-white/10" />
            <div className="h-12 rounded bg-white/10" />
            <div className="col-span-2 h-8 rounded bg-white/5" />
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="h-6 w-16 rounded-full bg-violet-500/30" />
          <div className="h-6 w-16 rounded-full bg-white/5" />
        </div>
      </div>
      <div className="hidden w-24 space-y-2 sm:block">
        <div className="rounded-lg bg-violet-500/20 p-2 text-[0.5rem] text-violet-200">AI Edit</div>
        <div className="h-16 rounded-lg bg-white/5" />
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 animate-pulse" />
      </div>
      <span className="text-[0.6rem] text-white/40">Generating...</span>
    </div>
  </div>
)

const MragChatVisual = () => (
  <div className="flex h-full flex-col gap-3 p-4">
    <div className="flex items-center gap-2 border-b border-white/5 pb-3">
      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-lime-400/40 to-cyan-400/40" />
      <div className="flex-1">
        <div className="h-2.5 w-24 rounded bg-white/20" />
        <div className="mt-1 h-1.5 w-16 rounded bg-white/5" />
      </div>
      <div className="flex gap-1">
        <div className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-lime-400 [animation-delay:0.2s]" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-lime-400 [animation-delay:0.4s]" />
      </div>
    </div>
    <div className="flex-1 space-y-3 overflow-hidden">
      <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-blue-500/20 px-3 py-2">
        <div className="h-2 w-32 rounded bg-white/20" />
      </div>
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/5 px-3 py-2">
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-4/5 rounded bg-white/10" />
          <div className="h-2 w-3/5 rounded bg-white/10" />
        </div>
        <div className="mt-2 flex gap-1">
          <div className="rounded bg-cyan-500/20 px-1.5 py-0.5 text-[0.5rem] text-cyan-300">ref.pdf</div>
          <div className="rounded bg-cyan-500/20 px-1.5 py-0.5 text-[0.5rem] text-cyan-300">p.12</div>
        </div>
      </div>
      <div className="flex items-center gap-2 px-1">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
        <div className="h-2 w-20 rounded bg-violet-400/30" />
      </div>
    </div>
    <div className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
      <div className="h-6 rounded-lg bg-white/5" />
    </div>
  </div>
)

const AdminVisual = () => (
  <div className="flex h-full gap-2 p-3">
    <div className="w-14 space-y-2 rounded-lg bg-white/5 p-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className={`h-6 rounded ${i === 2 ? 'bg-blue-500/40' : 'bg-white/5'}`} />
      ))}
    </div>
    <div className="flex flex-1 flex-col gap-2">
      <div className="grid grid-cols-3 gap-2">
        {['#3b82f6', '#10b981', '#f59e0b'].map((color) => (
          <div key={color} className="rounded-lg bg-white/5 p-2">
            <div className="h-1.5 w-8 rounded bg-white/20" />
            <div className="mt-2 h-4 w-12 rounded" style={{ background: `${color}40` }} />
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-lg bg-white/5 p-2">
        <div className="mb-2 flex gap-2">
          <div className="h-4 w-16 rounded bg-blue-500/30" />
          <div className="h-4 flex-1 rounded bg-white/5" />
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="mb-1.5 flex gap-2">
            <div className="h-5 flex-1 rounded bg-white/[0.03]" />
            <div className="h-5 w-12 rounded bg-white/[0.03]" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

const WebsiteVisual = () => (
  <div className="flex h-full flex-col p-4">
    <div className="mb-3 flex items-center justify-between">
      <div className="h-4 w-16 rounded bg-green-500/40" />
      <div className="flex gap-2">
        <div className="h-3 w-10 rounded bg-white/10" />
        <div className="h-3 w-10 rounded bg-white/10" />
        <div className="h-5 w-14 rounded-full bg-green-500/30" />
      </div>
    </div>
    <div className="flex-1 rounded-xl bg-gradient-to-br from-green-900/20 to-emerald-900/10 p-4">
      <div className="h-4 w-2/3 rounded bg-white/20" />
      <div className="mt-2 h-2.5 w-1/2 rounded bg-white/10" />
      <div className="mt-4 h-8 w-28 rounded-full bg-green-500/30" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-14 rounded-lg bg-white/5" />
        ))}
      </div>
    </div>
    <div className="mt-2 flex gap-2 overflow-hidden">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-6 w-12 shrink-0 rounded bg-white/5" />
      ))}
    </div>
  </div>
)

const CalendarVisual = () => (
  <div className="flex h-full flex-col gap-2 p-3">
    <div className="grid grid-cols-7 gap-1">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="h-3 rounded bg-white/5 text-center text-[0.4rem] text-white/20" />
      ))}
    </div>
    <div className="grid flex-1 grid-cols-7 gap-1">
      {Array.from({ length: 28 }).map((_, i) => (
        <div
          key={i}
          className={`rounded ${[5, 12, 19].includes(i) ? 'bg-blue-500/40 ring-1 ring-blue-400/30' : 'bg-white/[0.03]'}`}
        />
      ))}
    </div>
    <div className="flex gap-2">
      <div className="flex-1 rounded-lg bg-white/5 p-2">
        <div className="h-2 w-16 rounded bg-white/20" />
        <div className="mt-1 h-6 rounded bg-blue-500/20" />
      </div>
      <div className="w-20 rounded-lg bg-white/5 p-2">
        <div className="h-8 rounded bg-green-500/20" />
      </div>
    </div>
  </div>
)

const visualMap: Record<string, VisualComponent> = {
  mcbuilder: McbuilderVisual,
  'mrag-chat': MragChatVisual,
  'mitu-cms': AdminVisual,
  'mitu-website': WebsiteVisual,
  'mitu-admin': CalendarVisual,
}

const ProjectVisual = ({ slug, category }: ProjectVisualProps) => {
  const Visual = visualMap[slug] ?? AdminVisual
  const accent = accentByCategory[category]

  return (
    <div
      className="relative h-full min-h-[220px] overflow-hidden rounded-2xl ring-1 ring-white/10 sm:min-h-[280px]"
      style={{ background: `linear-gradient(135deg, ${accent.from}18, ${accent.to}08)` }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl"
        style={{ background: accent.glow }}
      />
      <div className="relative h-full">
        <Visual />
      </div>
    </div>
  )
}

export { ProjectVisual }
