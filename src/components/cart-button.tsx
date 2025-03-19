'use client'

import Cart from '@/assets/cart'
import { useCartStore } from '@/store'
import { type ComponentProps, useEffect, useState } from 'react'

type CartButtonProps = ComponentProps<'button'>

export function CartButton(props: CartButtonProps) {
  const { cart } = useCartStore()
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    setCartItems(cart.length)
  }, [cart])

  return (
    <button
      title="cart-button"
      type="button"
      className="relative items-center justify-center p-2 rounded-md cursor-pointer bg-yellow-light"
      {...props}
    >
      <Cart className="text-yellow-dark" width={22} height={22} />
      <div className="absolute -top-2.5 -right-2.5 size-5 rounded-full text-[14px] font-bold text-white bg-yellow-dark">
        {cartItems}
      </div>
    </button>
  )
}
