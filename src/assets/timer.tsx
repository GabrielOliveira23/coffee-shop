import Icon, { type ExternalIconProps } from './icon'

function Timer(props: ExternalIconProps) {
  return (
    <Icon
      paths={[
        'M13 2h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2M16 4a12 12 0 1 0 12 12A12.025 12.025 0 0 0 16 4m5.663 7.762-4.95 4.95a1.025 1.025 0 0 1-1.426 0 1.01 1.01 0 0 1 0-1.424l4.95-4.95a1.015 1.015 0 0 1 1.5-.074 1.014 1.014 0 0 1-.074 1.499',
      ]}
      {...props}
    />
  )
}

export default Timer
