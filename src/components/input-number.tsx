// import { Minus, Plus } from 'lucide-react'
import Minus from '@/assets/minus'
import Plus from '@/assets/plus'
import type { ComponentProps } from 'react'

interface InputNumberProps extends ComponentProps<'div'> {
  value?: number
  handleIncrement: () => void
  handleDecrement: () => void
}

export function InputNumber({
  value = 0,
  handleIncrement,
  handleDecrement,
  ...props
}: InputNumberProps) {
  return (
    <div
      className="flex flex-row items-center justify-center gap-1 px-2 rounded-md bg-base-button text-base-title"
      {...props}
    >
      <Minus
        className="text-purple cursor-pointer  hover:text-purple-dark"
        width={14}
        height={14}
        onClick={handleDecrement}
      />
      <span className="text-md w-5 flex justify-center select-none leading-[32px]">
        {value}
      </span>
      <Plus
        className="text-purple cursor-pointer hover:text-purple-dark"
        width={14}
        height={14}
        onClick={handleIncrement}
      />
    </div>
  )
}
