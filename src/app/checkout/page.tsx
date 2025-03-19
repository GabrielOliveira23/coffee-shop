import AddressForm from './address-form'
import { CartList } from './cart-list'
import PaymentSelect from './payment-select'

export default function Checkout() {
  return (
    <div className="flex max-w-[1120px] mx-auto mt-10 gap-8 justify-between">
      <div className="space-y-4 w-full">
        <h1 className="title-xs text-base-subtitle">Complete seu pedido</h1>
        <AddressForm />
        <PaymentSelect />
      </div>
      <CartList />
    </div>
  )
}
