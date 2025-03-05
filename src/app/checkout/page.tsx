import cafe from '@/../public/cafe-com-leite.png'
import { Button } from '@/components/button'
import { ProductCardCart } from '@/components/product-card'
import Link from 'next/link'
import AddressForm from './address-form'
import PaymentSelect from './payment-select'

const products = [
  {
    id: 'teste1',
    name: 'Expresso Tradicional',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    id: 'teste2',
    name: 'Latte',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  // {
  //   id: 'teste3',
  //   name: 'coffee',
  //   image: cafe,
  //   description: 'dfsfdsaf',
  //   price: 9.9,
  //   tags: ['TRADICIONAL', 'COM LEITE'],
  // },
]

export default function Checkout() {
  const entrega = 4.5
  const totalItens = products.reduce((acc, { price }) => acc + (price ?? 0), 0)
  const totalGeral = totalItens + entrega

  function formatCurrency(value: number) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className="flex max-w-[1120px] mx-auto mt-10 gap-8 justify-between">
      <div className="space-y-4 w-full">
        <h1 className="title-xs text-base-subtitle">Complete seu pedido</h1>
        <AddressForm />
        <PaymentSelect />
      </div>
      <div className="space-y-4">
        <h1 className="title-xs text-base-subtitle">Cafés selecionados</h1>
        <div className="flex flex-col rounded-[44px] rounded-tl-md rounded-br-md p-10 bg-base-card">
          {products.map(product => (
            <div key={product.id}>
              <ProductCardCart key={product.id} product={product} />
              <hr key={product.id + 1} className="my-6 text-base-button" />
            </div>
          ))}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span>Total de itens</span>
              <span className="text-md">{formatCurrency(totalItens)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Entrega</span>
              <span className="text-md">{formatCurrency(totalGeral)}</span>
            </div>
            <div className="flex items-center justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span>R$ 10,00</span>
            </div>
          </div>

          <Link href="/checkout/success">
            <Button>CONFIRMAR PEDIDO</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
