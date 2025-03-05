import Icon, { type ExternalIconProps } from './icon'

function MapPin(props: ExternalIconProps) {
  return (
    <Icon
      paths={[
        'M16 2A11.013 11.013 0 0 0 5 13c0 9.413 10 16.525 10.425 16.825a1.04 1.04 0 0 0 1.15 0C17 29.525 27 22.413 27 13A11.01 11.01 0 0 0 16 2m0 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8',
      ]}
      {...props}
    />
  )
}

export default MapPin
