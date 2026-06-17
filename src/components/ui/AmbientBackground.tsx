'use client'

const AmbientBackground = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div
      className="absolute -top-48 -left-24 h-[600px] w-[600px] rounded-full opacity-35 blur-[100px]"
      style={{ background: '#7c3aed', animation: 'float 20s ease-in-out infinite' }}
    />
    <div
      className="absolute top-[40%] -right-36 h-[500px] w-[500px] rounded-full opacity-35 blur-[100px]"
      style={{ background: '#3b82f6', animation: 'float 20s ease-in-out -7s infinite' }}
    />
    <div
      className="absolute -bottom-24 left-[30%] h-[400px] w-[400px] rounded-full opacity-35 blur-[100px]"
      style={{ background: '#06b6d4', animation: 'float 20s ease-in-out -14s infinite' }}
    />
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
      }}
    />
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -40px) scale(1.05); }
        66% { transform: translate(-20px, 20px) scale(0.95); }
      }
    `}</style>
  </div>
)

export { AmbientBackground }
