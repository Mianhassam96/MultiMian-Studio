interface WaveDividerProps {
  /** flip the wave vertically */
  flip?: boolean
  /** custom fill color — defaults to a soft gradient-friendly white */
  fill?: string
}

export default function WaveDivider({ flip = false, fill = 'rgba(255,255,255,0.07)' }: WaveDividerProps) {
  return (
    <div className={`w-full -my-1 pointer-events-none ${flip ? 'rotate-180' : ''}`} aria-hidden>
      <svg
        viewBox="0 0 1440 80"
        className="w-full h-12 md:h-16"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Two layered waves for depth */}
        <path
          d="M0 40 C 240 70 480 10 720 40 C 960 70 1200 10 1440 40 L1440 80 L0 80 Z"
          fill={fill}
          opacity="0.5"
        />
        <path
          d="M0 50 C 360 20 900 70 1440 50 L1440 80 L0 80 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
