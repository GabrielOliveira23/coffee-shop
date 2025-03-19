import MapPinOutlined from '@/assets/map-pin-outlined'
import { InputField, InputRoot } from '@/components'
import { useFormContext } from 'react-hook-form'
import type { OrderFormProps } from './order-form.schema'

export default function AddressForm() {
  const { register } = useFormContext<OrderFormProps>()

  return (
    <div className="flex flex-col rounded-md p-10 gap-8 bg-base-card">
      <div className="flex space-x-1">
        <MapPinOutlined className="text-yellow-dark" width={22} height={22} />
        <div className="flex flex-col">
          <span className="text-md text-base-subtitle">
            Endereço de Entrega
          </span>
          <span className="text-sm">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </div>
      <form
        onSubmit={() => {
          console.log('oi')
        }}
        className="flex flex-col gap-4"
      >
        <InputRoot className="max-w-50">
          <InputField
            {...register('address.cep')}
            placeholder="CEP"
            maxLength={9}
          />
        </InputRoot>
        <InputRoot>
          <InputField {...register('address.street')} placeholder="Rua" />
        </InputRoot>
        <div className="flex gap-3">
          <InputRoot className="max-w-50">
            <InputField
              {...register('address.number')}
              type="number"
              placeholder="Número"
              max={9999}
              maxLength={4}
              className="appearance-none"
            />
          </InputRoot>
          <InputRoot className="w-full" isOptional>
            <InputField
              {...register('address.complement')}
              placeholder="Complemento"
            />
          </InputRoot>
        </div>
        <div className="flex gap-3">
          <InputRoot className="max-w-50">
            <InputField
              {...register('address.neighborhood')}
              placeholder="Bairro"
            />
          </InputRoot>
          <InputRoot className="w-full">
            <InputField {...register('address.city')} placeholder="Cidade" />
          </InputRoot>
          <InputRoot className="max-w-15">
            <InputField
              {...register('address.uf')}
              placeholder="UF"
              maxLength={2}
            />
          </InputRoot>
        </div>
      </form>
    </div>
  )
}
