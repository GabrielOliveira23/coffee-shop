'use client'

import { Button } from '@/components/button'
import { ProductCardCart } from '@/components/product-card'
import { useCartStore } from '@/store/use-cart-store'
import { useEffect } from 'react'
// import Link from 'next/link'

function formatCurrency(value: number) {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export function CartList() {
  const { cart, getCartStorage } = useCartStore()
  const cartLength = cart.length

  const entrega = 4.5
  const totalItens = cart.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  )
  const totalGeral = totalItens + entrega

  useEffect(() => {
    if (cartLength === 0) {
      getCartStorage()
    }
  }, [cartLength, getCartStorage])

  return (
    <div className="space-y-4">
      <h1 className="title-xs text-base-subtitle">Cafés selecionados</h1>
      <div className="flex flex-col rounded-[44px] rounded-tl-md rounded-br-md p-10 bg-base-card">
        {cart.length === 0 ? (
          <div>
            <h3 className="flex items-center justify-center w-92 title-sm">
              Nenhum Produto adicionado
            </h3>
            <hr className="my-6 text-base-button" />
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id}>
              <ProductCardCart key={item.id} product={item} />
              <hr key={item.id + 1} className="my-6 text-base-button" />
            </div>
          ))
        )}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>Total de itens</span>
            <span className="text-md">{formatCurrency(totalItens)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Entrega</span>
            <span className="text-md">{formatCurrency(entrega)}</span>
          </div>
          <div className="flex items-center justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span>{formatCurrency(totalGeral)}</span>
          </div>
        </div>

        {/* <Link href="/checkout/success"> */}
        <Button title="checkout" type="submit" disabled={cart.length === 0}>
          CONFIRMAR PEDIDO
        </Button>
        {/* </Link> */}
      </div>
    </div>
  )
}
