import type { Product } from '@/types'
import { create } from 'zustand'

interface ProductStore {
  products: Product[]
  isLoading: boolean
  setProducts: (products: Product[]) => void
  setLoading: (loading: boolean) => void
}

export const useProductStore = create<ProductStore>(set => ({
  products: [],
  isLoading: false,
  setProducts: products => {
    set({ products })
  },
  setLoading: loading => {
    set({ isLoading: loading })
  },
}))
