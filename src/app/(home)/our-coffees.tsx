'use client'

import { ProductCard } from '@/components'
import { coffeeShopApi } from '@/http/api'
import { useProductStore } from '@/store'
import { useEffect } from 'react'

const api = coffeeShopApi()

export default function OurCoffees() {
  const { products, isLoading, setProducts, setLoading } = useProductStore()

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      try {
        const { data } = await api.getAllProducts()

        setProducts(data.products)
      } catch (error) {
        console.error('Error fetching products: ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [setLoading, setProducts])

  return (
    <section className="flex flex-col max-w-[1120px] mx-auto pt-8 bg-background">
      <h1 className="title-lg text-base-title mb-[51px]">Nossos cafés</h1>
      {isLoading ? (
        <div>
          <h1 className="title-md">Ta carregando</h1>
        </div>
      ) : (
        <div className="flex flex-wrap gap-x-8 gap-y-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
