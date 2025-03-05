import MapPinOutlined from '@/assets/map-pin-outlined'
import { InputField, InputRoot } from '@/components/input'

export default function AddressForm() {
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
      <div className="flex flex-col gap-4">
        <InputRoot className="max-w-50">
          <InputField placeholder="CEP" maxLength={9} />
        </InputRoot>
        <InputRoot>
          <InputField placeholder="Rua" />
        </InputRoot>
        <div className="flex gap-3">
          <InputRoot className="max-w-50">
            <InputField
              type="number"
              placeholder="Número"
              max={9999}
              maxLength={4}
              className="appearance-none"
            />
          </InputRoot>
          <InputRoot className="w-full" isOptional>
            <InputField placeholder="Complemento" />
          </InputRoot>
        </div>
        <div className="flex gap-3">
          <InputRoot className="max-w-50">
            <InputField placeholder="Bairro" />
          </InputRoot>
          <InputRoot className="w-full">
            <InputField placeholder="Cidade" />
          </InputRoot>
          <InputRoot className="max-w-15">
            <InputField placeholder="UF" maxLength={2} />
          </InputRoot>
        </div>
      </div>
    </div>
  )
}
