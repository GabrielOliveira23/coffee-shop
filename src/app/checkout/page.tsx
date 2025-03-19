'use client'

import { coffeeShopApi } from '@/http/api'
import { useCartStore } from '@/store'
import type { Address } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
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
  const { resetCart } = useCartStore()
  const methods = useForm<OrderFormProps>({
    resolver: zodResolver(orderSchema),
    shouldFocusError: true,
    defaultValues: {
      address: addressFake,
    },
  })

  async function checkoutOrder(data: OrderFormProps) {
    console.log('data: ', data)

    try {
      const response = await api.createOrder(data)

      if (response.status === 201) {
        console.log(response.data)
        resetCart()
      }
    } catch (error) {
      console.error(error)
    }
    // redirect('/checkout/success')
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
          onSubmit={methods.handleSubmit(checkoutOrder, () =>
            console.error('form errors: ', methods.formState.errors)
          )}
        />
      </FormProvider>
    </div>
  )
}
