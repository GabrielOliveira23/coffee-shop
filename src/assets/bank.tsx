import Icon, { type ExternalIconProps } from './icon'

function Bank(props: ExternalIconProps) {
  return (
    <Icon
      fillRule="evenodd"
      clipRule="evenodd"
      paths={[
        'M15.476 3.148a1 1 0 0 1 1.048 0l13 8A1 1 0 0 1 29 13H3a1 1 0 0 1-.524-1.852zM6.533 11h18.934L16 5.174z',
        'M7 11a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1M13 11a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1M19 11a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1M25 11a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1',
        'M3 22a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M1 26a1 1 0 0 1 1-1h28a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1',
      ]}
      {...props}
    />
  )
}

export default Bank
