'use client'

import { InputField, InputRoot } from '@/components/input'
import { Select } from '@/components/select'
import { Banknote, CreditCard, PiggyBank } from 'lucide-react'
import { useState } from 'react'

const paymentMethods = [
  { id: 'credit', label: 'CARTÃO DE CRÉDITO', icon: CreditCard },
  { id: 'debit', label: 'CARTÃO DE DÉBITO', icon: PiggyBank },
  { id: 'money', label: 'DINHEIRO', icon: Banknote },
]

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="flex p-40 items-center justify-center flex-col gap-8">
      {/* <Button>LABEL</Button>
      <RemoveButton />
      <IconButton Icon={ShoppingCart} />
      <CartButton /> */}
      {paymentMethods.map(method => (
        <Select
          key={method.id}
          paymentMethod={method}
          selected={selected}
          onClick={() => setSelected(method.id)}
        />
      ))}
      <InputRoot>
        <InputField placeholder='Label'/>
      </InputRoot>
    </div>
  )
}
