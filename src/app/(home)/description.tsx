import heroImage from '@/../public/hero-image.png'
import Cart from '@/assets/cart'
import Coffee from '@/assets/coffee'
import Package from '@/assets/package'
import Timer from '@/assets/timer'
import Image from 'next/image'
import type { ReactNode } from 'react'

const capabilities = [
  {
    description: 'Compra simples e segura',
    icon: <Cart className="text-background" height={16} width={16} />,
    color: 'bg-yellow-dark',
  },
  {
    description: 'Embalagem mantém o café intacto',
    icon: <Package className="text-background" height={16} width={16} />,
    color: 'bg-base-text',
  },
  {
    description: 'Entrega rápida e rastreada',
    icon: <Timer className="text-background" height={16} width={16} />,
    color: 'bg-yellow',
  },
  {
    description: 'O café chega fresquinho até você',
    icon: <Coffee className="text-background" height={16} width={16} />,
    color: 'bg-purple',
  },
] as Capability[]

interface Capability {
  icon: ReactNode
  description: string
  color: string
}

function renderCapabilities() {
  return capabilities.map(({ description, icon, color }, idx) => (
    <div
      className="flex items-center gap-3"
      key={`${description.split(' ')[0]} ${idx}`}
    >
      <div className={`rounded-full p-2 ${color}`}>{icon}</div>
      <span className="text-md">{description}</span>
    </div>
  ))
}

export default function Description() {
  return (
    <section className="flex justify-center h-[544px] bg-[url(/background.png)] bg-no-repeat bg-cover">
      <div className="flex flex-row items-center gap-14 max-w-[1120px]">
        <div className="flex flex-col h-[342px] justify-between">
          <div className='flex flex-col gap-4'>
            <h1 className="title-xl text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <span className="text-lg text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <div className="grid grid-cols-[fit-content(100%)_fit-content(100%)] gap-x-10 gap-y-5">
            {renderCapabilities()}
          </div>
        </div>
        <Image
          src={heroImage}
          alt="coffee image"
          width={1000}
          height={1000}
          quality={100}
          className="w-119 h-90"
        />
      </div>
    </section>
  )
}
