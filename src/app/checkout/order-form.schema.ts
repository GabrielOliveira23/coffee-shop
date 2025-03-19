import { z } from 'zod'

const addressSchema = z.object({
  cep: z.string().regex(/^\d{5}-\d{3}$/, 'CEP must match it with XXXXX-XXX'),
  street: z.string().min(3, 'Street must have at least 3 characters'),
  number: z.number().gte(0, 'Number must be greater than 0'),
  neighborhood: z
    .string()
    .min(3, 'Neighborhood must have at least 3 characters'),
  city: z.string().min(3, 'City must have at least 3 characters'),
  uf: z.string().regex(/^[A-Z]{2}$/, 'UF must be two letters'),
  complement: z.string().nullish(),
})

export const orderSchema = z.object({
  value: z.number().gt(0, 'Price must be greater than 0'),
  paymentBy: z.enum(['CREDIT_CARD', 'DEBIT_CARD', 'MONEY']),
  address: addressSchema,
})

export type OrderFormProps = z.infer<typeof orderSchema>

export type PAYMENT_METHOD = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY'
