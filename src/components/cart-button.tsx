import Cart from '@/assets/cart'
import type { ComponentProps } from 'react'

type CartButtonProps = ComponentProps<'button'>

export function CartButton(props: CartButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center justify-center p-2 rounded-md cursor-pointer bg-yellow-light"
      {...props}
    >
      <Cart className="text-yellow-dark" width={22} height={22} />
    </button>
  )
}
