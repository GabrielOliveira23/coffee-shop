'use client'

import { coffeeShopApi } from '@/http/api'
import { useCartStore } from '@/store'
import type { Address } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import AddressForm from './address-form'
import { CartList } from './cart-list'
import {
  type OrderFormProps,
  type PAYMENT_METHOD,
  orderSchema,
} from './order-form.schema'
import PaymentSelect from './payment-select'

const api = coffeeShopApi()

const addressFake: Address = {
  cep: '84015-700',
  street: 'Rua Dept. Chafic Cury',
  city: 'Ponta Grossa',
  neighborhood: 'Jd. Carvalho',
  number: 310,
  uf: 'PR',
  complement: 'Bloco 1, apto 308',
}

export default function Checkout() {
  const router = useRouter()
  const { cart, getCartStorage, resetCart } = useCartStore()
  const cartLength = cart.length

  useEffect(() => {
    if (cartLength === 0) {
      getCartStorage()
    }
  }, [cartLength, getCartStorage])

  const methods = useForm<OrderFormProps>({
    resolver: zodResolver(orderSchema),
    shouldFocusError: true,
    defaultValues: {
      address: addressFake,
      products: cart.map(product => ({
        productId: product.id,
        quantity: product.quantity,
      })),
    },
  })

  async function checkoutOrder(data: OrderFormProps) {
    try {
      const parsedData = {
        ...data,
        products: cart.map(product => ({
          ...product,
          productId: product.id,
        })),
      }

      orderSchema.parse(parsedData)

      const response = await api.createOrder(data)
      if (response.status === 201) {
        const createdOrder = response.data.createdOrder
        resetCart()
        sessionStorage.setItem('createdOrder', JSON.stringify(createdOrder))
        router.push(`/checkout/${createdOrder.id}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex max-w-[1120px] mx-auto mt-10 gap-8 justify-between">
      <FormProvider {...methods}>
        <div className="space-y-4 w-full">
          <h1 className="title-xs text-base-subtitle">Complete seu pedido</h1>
          <AddressForm />
          <PaymentSelect
            setPaymentMethod={(value: PAYMENT_METHOD) =>
              methods.setValue('paymentBy', value)
            }
          />
        </div>
        <CartList
          cart={cart}
          onSubmit={methods.handleSubmit(checkoutOrder, () =>
            console.error('form errors: ', methods.formState.errors)
          )}
        />
      </FormProvider>
    </div>
  )
}
