import Icon, { type ExternalIconProps } from './icon'

function Plus(props: ExternalIconProps) {
  return (
    <Icon
      fillRule="evenodd"
      clipRule="evenodd"
      paths={[
        'M3.5 16A1.5 1.5 0 0 1 5 14.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 16',
        'M16 3.5A1.5 1.5 0 0 1 17.5 5v22a1.5 1.5 0 0 1-3 0V5A1.5 1.5 0 0 1 16 3.5',
      ]}
      {...props}
    />
  )
}

export default Plus
