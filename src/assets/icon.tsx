import type { ComponentProps } from 'react'

export type ExternalIconProps = ComponentProps<'svg'>

interface IconProps extends ComponentProps<'svg'> {
  paths: string[]
}

export default function Icon({
  paths,
  className,
  clipRule,
  fillRule,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 32 32"
      className={className}
      {...props}
    >
      {paths.map((path, idx) => (
        <path
          key={`${path.split(' ')[0]} ${idx}`}
          d={path}
          clipRule={clipRule}
          fillRule={fillRule}
        />
      ))}
    </svg>
  )
}
