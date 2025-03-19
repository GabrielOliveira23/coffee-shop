import type { Product, ProductCart } from '@/types'
import { create } from 'zustand'

interface CartStore {
  cart: ProductCart[]
  getCartStorage: () => void
  addToCart: (item: Product, quantity: number) => void
  removeFromCart: (item: Product) => void
  updateQuantity: (productId: string, quantity: number) => void
}

function isValidProductCart(item: unknown): item is ProductCart {
  if (typeof item !== 'object' || item === null) return false

  const obj = item as ProductCart
  return (
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.price === 'number' &&
    typeof obj.quantity === 'number'
  )
}

export const useCartStore = create<CartStore>(set => ({
  cart: [],
  getCartStorage: () => {
    const cartData = sessionStorage.getItem('cart')

    if (!cartData) return

    const parsedCart: unknown = JSON.parse(cartData)

    if (Array.isArray(parsedCart) && parsedCart.every(isValidProductCart)) {
      set({ cart: parsedCart })
    }
  },
  addToCart: (item, quantity) => {
    set(state => {
      const productIndex = state.cart.findIndex(p => p.id === item.id)
      let newCart: ProductCart[]

      if (productIndex !== -1) {
        newCart = state.cart.map((p, index) =>
          index === productIndex ? { ...p, quantity } : p
        )
      } else {
        newCart = [...state.cart, { ...item, quantity }]
      }

      sessionStorage.setItem('cart', JSON.stringify(newCart))
      return { cart: newCart }
    })
  },
  removeFromCart: item => {
    set(({ cart }) => {
      const newCart = cart.filter(({ id }) => id !== item.id)
      sessionStorage.setItem('cart', JSON.stringify(newCart))

      return { cart: newCart }
    })
  },
  updateQuantity: (productId, value) => {
    set(({ cart }) => {
      const newCart = cart.map(product => {
        if (product.id !== productId) return product
        return { ...product, quantity: Math.max(1, product.quantity + value) }
      })

      sessionStorage.setItem('cart', JSON.stringify(newCart))

      return { cart: newCart }
    })
  },
}))
