export type Order = {
  id: string
  value: number
  paymentBy: keyof typeof PaymentMethod
  address: Address
}

export enum PaymentMethod {
  CREDIT_CARD = 'Cartão de credito',
  DEBIT_CARD = 'Cartão de débito',
  MONEY = 'Dinheiro',
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
