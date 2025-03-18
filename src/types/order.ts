export type Order = {
  id: string
  value: number
  paymentBy: PaymentMethod
  address: Address
}

export enum PaymentMethod {
  credit = 'CREDIT_CARD',
  debit = 'DEBIT_CARD',
  money = 'MONEY',
}

export type Address = {
  cep: string
  street: string
  number: number
  neighborhood: string
  city: string
  uf: string
  complement?: string | null
}
