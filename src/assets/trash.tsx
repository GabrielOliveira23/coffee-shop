import Icon, { type ExternalIconProps } from './icon'

function Trash(props: ExternalIconProps) {
  return (
    <Icon
      clipRule="evenodd"
      fillRule="evenodd"
      paths={[
        'M4 7a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M13 12a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1M19 12a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1',
        'M7 6a1 1 0 0 1 1 1v19h16V7a1 1 0 1 1 2 0v19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1',
        'M10.879 2.879A3 3 0 0 1 13 2h6a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0V5a3 3 0 0 1 .879-2.121',
      ]}
      {...props}
    />
  )
}

export default Trash
