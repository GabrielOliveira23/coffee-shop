import Icon, { type ExternalIconProps } from './icon'

function CreditCart(props: ExternalIconProps) {
  return (
    <Icon
      fillRule="evenodd"
      clipRule="evenodd"
      paths={[
        'M2 8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm26 0H4v16h24z',
        'M20 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M14 21a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M2 12.113a1 1 0 0 1 1-1h26a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1',
      ]}
      {...props}
    />
  )
}

export default CreditCart
