export type Product = {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  image: string | null
}

export type ProductCart = Product & {
  quantity: number
}
