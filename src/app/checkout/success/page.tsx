import motoboy from '@/../public/motoboy.png'
import Dolar from '@/assets/dolar'
import MapPin from '@/assets/map-pin'
import Timer from '@/assets/timer'
import Image from 'next/image'

export default function CheckoutSuccess() {
  return (
    <div className="flex flex-col gap-10 max-w-[1120px] mx-auto mt-20">
      <section className="">
        <h1 className="title-lg text-yellow-dark">Uhu! Pedido confirmado</h1>
        <span className="text-lg text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </span>
      </section>
      <section className="flex gap-[102px]">
        <div className="w-full h-fit p-px rounded-[36px] rounded-tl-md rounded-br-md border border-transparent bg-gradient-to-r from-yellow  to-purple bg-clip-padding">
          <div className="flex flex-col gap-8 h-fit p-10 rounded-[35px] rounded-tl-[5px] rounded-br-[5px] bg-background">
            <div className="flex items-center gap-3">
              <div className="w-fit rounded-full p-2 bg-purple">
                <MapPin className="text-background" width={16} height={16} />
              </div>
              <div className="flex flex-col">
                <span>
                  Entrega em{' '}
                  <span className="font-bold">
                    Rua João Daniel Martinelli, 102{' '}
                  </span>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-fit rounded-full p-2 bg-yellow">
                <Timer className="text-background" width={16} height={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-md">Previsão de entrega</span>
                <span className="text-md font-bold">20 min - 30 min </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-fit rounded-full p-2 bg-yellow-dark">
                <Dolar className="text-background" width={16} height={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-md">Pagamento na entrega</span>
                <span className="text-md font-bold">Cartão de Crédito</span>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={motoboy}
          alt="motoboy"
          quality={100}
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </section>
    </div>
  )
}
