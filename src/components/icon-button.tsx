import type { LucideProps } from 'lucide-react'
import type {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
}

export function IconButton({ Icon, className, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'flex items-center justify-center p-2 rounded-md cursor-pointer bg-purple-dark hover:bg-purple',
        className
      )}
      {...props}
    >
      <Icon fill="#f3f2f2" className="text-base-card" size={22} />
    </button>
  )
}
