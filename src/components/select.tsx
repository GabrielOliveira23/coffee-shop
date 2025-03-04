import type { LucideProps } from 'lucide-react'
import type {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'
import { twMerge } from 'tailwind-merge'

interface SelectProps extends ComponentProps<'button'> {
  paymentMethod: {
    id: string
    label: string
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
    >
  }
  selected: string | null
}

export function Select({ paymentMethod, selected, ...props }: SelectProps) {
  return (
    <button
      key={paymentMethod.id}
      type="button"
      className={twMerge(
        'button-md flex items-center gap-3 p-4 rounded-md cursor-pointer bg-base-button hover:bg-base-hover',
        selected === paymentMethod.id &&
          'border border-purple bg-purple-light hover:bg-purple-light'
      )}
      {...props}
    >
      <paymentMethod.icon
        className="text-purple w-4 h-4 text-purple-500"
        size={16}
      />
      <span>{paymentMethod.label}</span>
    </button>
  )
}

export function SelectItem() {
  return
}
