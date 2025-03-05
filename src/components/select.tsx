import type { ComponentProps, JSX } from 'react'
import { twMerge } from 'tailwind-merge'

interface SelectProps extends ComponentProps<'button'> {
  paymentMethod: {
    id: string
    label: string
    icon: JSX.ElementType
  }
  selected?: string
}

export function Select({ paymentMethod, selected, ...props }: SelectProps) {
  return (
    <button
      key={paymentMethod.id}
      type="button"
      className={twMerge(
        'button-md flex items-center w-full gap-3 p-4 rounded-md cursor-pointer bg-base-button hover:bg-base-hover',
        selected === paymentMethod.id &&
          'border border-purple bg-purple-light hover:bg-purple-light'
      )}
      {...props}
    >
      <paymentMethod.icon
        className="text-purple w-4 h-4 text-purple-500"
        width={16}
        height={16}
      />
      <span>{paymentMethod.label}</span>
    </button>
  )
}

export function SelectItem() {
  return
}
