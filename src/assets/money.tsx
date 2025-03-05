import Icon, { type ExternalIconProps } from './icon'

function Money(props: ExternalIconProps) {
  return (
    <Icon
      fillRule="evenodd"
      clipRule="evenodd"
      paths={[
        'M1 9a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm28 0H3v14h26z',
        'M16 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0M21.247 7.342a1 1 0 0 1 1.412-.095l8 7a1 1 0 1 1-1.317 1.506l-8-7a1 1 0 0 1-.095-1.411',
        'M30.753 16.342a1 1 0 0 1-.095 1.41l-8 7a1 1 0 1 1-1.317-1.505l8-7a1 1 0 0 1 1.412.095M10.753 7.342a1 1 0 0 1-.095 1.41l-8 7a1 1 0 1 1-1.316-1.505l8-7a1 1 0 0 1 1.41.095',
        'M1.247 16.342a1 1 0 0 1 1.412-.095l8 7a1 1 0 1 1-1.317 1.506l-8-7a1 1 0 0 1-.095-1.412',
      ]}
      {...props}
    />
  )
}

export default Money
