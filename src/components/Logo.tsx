interface LogoProps {
  size?: 'sm' | 'md'
  withTagline?: boolean
}

export function Logo({ size = 'md', withTagline = true }: LogoProps) {
  const iconBox = size === 'sm' ? 'w-8 h-8 p-1.5 rounded' : 'w-10 h-10 p-2 rounded-lg'
  const textSize = size === 'sm' ? 'text-lg' : 'text-xl'

  return (
    <a href="#inicio" className="flex items-center gap-3 group" onClick={(e) => e.preventDefault()}>
      <div
        className={`${iconBox} bg-gradient-to-br from-brand-orange to-red-700 flex items-center justify-center shadow-magma group-hover:scale-105 transition-transform`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
          <polygon points="50,10 90,85 68,85 50,45 32,85 10,85" />
          <polygon points="50,45 68,85 45,85" fill="#0B0C14" />
        </svg>
      </div>
      <div>
        <div
          className={`flex items-center ${textSize} font-bold font-heading tracking-wider text-white`}
        >
          VOLKA<span className="text-brand-orange">NEXT</span>
        </div>
        {withTagline && (
          <span className="block text-[9px] uppercase tracking-widest text-brand-light-text -mt-1 font-medium">
            Software &amp; Web
          </span>
        )}
      </div>
    </a>
  )
}