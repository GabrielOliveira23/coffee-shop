'use client'

import CreditCart from '@/assets/credit-card'
import Dolar from '@/assets/dolar'
import Money from '@/assets/money'
import { Select } from '@/components/select'
import { useState } from 'react'
import type { PAYMENT_METHOD } from './order-form.schema'

const paymentMethods = [
  {
    id: 'credit',
    label: 'CARTÃO DE CRÉDITO',
    icon: CreditCart,
    value: 'CREDIT_CARD',
  },
  {
    id: 'debit',
    label: 'CARTÃO DE DÉBITO',
    icon: CreditCart,
    value: 'DEBIT_CARD',
  },
  {
    id: 'money',
    label: 'DINHEIRO',
    icon: Money,
    value: 'MONEY',
  },
] as const

interface PaymentSelectProps {
  setPaymentMethod: (value: PAYMENT_METHOD) => void
}

export default function PaymentSelect({
  setPaymentMethod,
}: PaymentSelectProps) {
  const [selected, setSelected] = useState<string>()

  return (
    <div className="flex flex-col rounded-md p-10 gap-8 bg-base-card">
      <div className="flex space-x-1">
        <Dolar className="text-purple" width={22} height={22} />
        <div className="flex flex-col">
          <span className="text-md text-base-subtitle">Pagamento</span>
          <span className="text-sm">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>
      <div className="flex gap-3">
        {paymentMethods.map(method => (
          <Select
            key={method.id}
            paymentMethod={method}
            selected={selected}
            onClick={() => {
              setSelected(method.id)
              setPaymentMethod(method.value)
            }}
          />
        ))}
      </div>
    </div>
  )
}
