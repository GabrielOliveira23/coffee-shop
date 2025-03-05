import { ProductCard } from '@/components/product-card'

import cafe from "@/../public/americano.png"

const products = [
  {
    id: 'teste1',
    name: 'coffee',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    id: 'teste2',
    name: 'coffee',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    id: 'teste3',
    name: 'coffee',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 'teste4',
    name: 'coffee',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    id: 'teste5',
    name: 'coffee',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    id: 'teste6',
    name: 'coffee',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    id: 'teste7',
    name: 'coffee',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    id: 'teste8',
    name: 'coffee',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    id: 'teste9',
    name: 'coffee',
    image: cafe,
    description: 'dfsfdsaf',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
]

export default function OurCoffees() {
  return (
    <section className="flex flex-col max-w-[1120px] mx-auto pt-8 bg-background">
      <h1 className="title-lg text-base-title mb-[51px]">Nossos cafés</h1>
      <div className='flex flex-wrap gap-x-8 gap-y-10'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
