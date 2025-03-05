import Icon, { type ExternalIconProps } from './icon'

function Cart(props: ExternalIconProps) {
  return (
    <Icon
      paths={[
        'm27.988 8.175-1.526 8.363A3 3 0 0 1 23.513 19h-14.5l.55 3H23a3 3 0 1 1-3 3c0-.34.06-.68.175-1h-7.35a3 3 0 1 1-5.1-.95L4.262 4H2a1 1 0 0 1 0-2h2.263a2 2 0 0 1 1.962 1.638L6.838 7H27a.99.99 0 0 1 .762.362.96.96 0 0 1 .226.813',
      ]}
      {...props}
    />
  )
}

export default Cart
