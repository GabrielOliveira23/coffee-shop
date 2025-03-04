import { ShoppingCart } from 'lucide-react'
import type { ComponentProps } from 'react'

type CartButtonProps = ComponentProps<'button'>

export function CartButton(props: CartButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center justify-center p-2 rounded-md cursor-pointer bg-yellow-light"
      {...props}
    >
      <ShoppingCart
        className="text-yellow-dark"
        fill="#c47f17"
        size={22}
      />
    </button>
  )
}
