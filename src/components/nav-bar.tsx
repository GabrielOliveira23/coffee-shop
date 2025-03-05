import logo from '@/../public/logo.png'
import MapPin from '@/assets/map-pin'
import Image from 'next/image'
import Link from 'next/link'
import { CartButton } from './cart-button'

export function NavBar() {
  return (
    <header className="sticky top-0 z-20 px-[20%] py-8 flex justify-between items-center bg-background">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" height={40} width={85} />
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex items-center justify-center p-2 gap-1 rounded-md select-none bg-purple-light">
          <MapPin className="text-purple" width={22} height={22} />
          <span>Ponta Grossa, PR</span>
        </div>
        <Link href="/checkout">
          <CartButton />
        </Link>
      </div>
    </header>
  )
}
