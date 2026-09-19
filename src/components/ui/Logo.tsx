interface LogoProps {
  size?: 'sm' | 'md'
  withTagline?: boolean
}

export function Logo({ size = 'md', withTagline = true }: LogoProps) {
  const iconBox =
    size === 'sm' ? 'w-8 h-8 p-1.5 rounded' : 'w-10 h-10 p-2 rounded-lg'
  const textSize = size === 'sm' ? 'text-lg' : 'text-xl'

  return (
    <a
      href="#inicio"
      className="group flex items-center gap-3"
      onClick={(e) => e.preventDefault()}
    >
      <div
        className={`${iconBox} flex items-center justify-center bg-gradient-to-br from-brand-orange to-red-700 shadow-magma transition-transform group-hover:scale-105`}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full fill-white">
          <polygon points="50,10 90,85 68,85 50,45 32,85 10,85" />
          <polygon points="50,45 68,85 45,85" fill="#0B0C14" />
        </svg>
      </div>
      <div>
        <div
          className={`flex items-center ${textSize} font-heading font-bold tracking-wider text-white`}
        >
          VOLKA<span className="text-brand-orange">NEXT</span>
        </div>
        {withTagline && (
          <span className="-mt-1 block text-[9px] font-medium tracking-widest text-brand-light-text uppercase">
            Software &amp; Web
          </span>
        )}
      </div>
    </a>
  )
}
