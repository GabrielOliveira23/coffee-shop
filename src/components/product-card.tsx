'use client'

import Cart from '@/assets/cart'
import Image, { type StaticImageData } from 'next/image'
import { useState } from 'react'
import { RemoveButton } from './button'
import { IconButton } from './icon-button'
import { InputNumber } from './input-number'
import { Tag } from './tag'

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    image: StaticImageData
    tags: string[]
    // quantity: number
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  function handleDecrement() {
    if (quantity <= 1) return
    setQuantity(prev => prev - 1)
  }

  function handleIncrement() {
    setQuantity(prev => prev + 1)
  }

  return (
    <div className="relative flex flex-col w-64 h-[310px] items-center rounded-4xl rounded-tl-md rounded-br-md px-5 pt-[100px] bg-base-card">
      <Image
        src={product.image}
        alt={product.name}
        width={120}
        height={120}
        quality={100}
        className="absolute -top-5"
      />
      <div className="flex gap-1">
        {product.tags.map((tag, idx) => (
          <Tag key={`${tag} ${idx}`} className="mt-3">
            {tag}
          </Tag>
        ))}
      </div>
      <h2 className="mt-4 title-sm text-base-subtitle">{product.name}</h2>
      <span className="mt-2 text-sm text-center text-base-label">
        {product.description}
      </span>
      <div className="absolute bottom-5 w-52 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <span className="text-sm">R$</span>
          <h3 className="title-md">
            {
              product.price
                .toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
                .split('R$')[1]
            }
          </h3>
        </div>
        <div className="flex flex-row gap-2">
          <InputNumber
            value={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
          <IconButton Icon={Cart} />
        </div>
      </div>
    </div>
  )
}

export function ProductCardCart({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(0)

  function handleDecrement() {
    if (quantity <= 1) return
    setQuantity(prev => prev - 1)
  }

  function handleIncrement() {
    setQuantity(prev => prev + 1)
  }

  return (
    <div className="flex items-start justify-between px-1 py-2 w-92 bg-base-card">
      <div className="flex gap-5">
        <Image
          src={product.image}
          alt={product.name}
          width={64}
          height={64}
          quality={100}
        />
        <div className="flex flex-col gap-2">
          <span className="text-md text-base-subtitle">{product.name}</span>
          <div className="flex gap-2">
            <InputNumber
              value={quantity}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
            <RemoveButton />
          </div>
        </div>
      </div>
      <span className="text-md font-bold">
        {product.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
    </div>
  )
}
