import type { ComponentProps, JSX } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {
  Icon: JSX.ElementType
}

export function IconButton({ Icon, className, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'flex items-center justify-center p-2 rounded-md cursor-pointer bg-purple-dark hover:bg-purple *:text-base-card',
        className
      )}
      {...props}
    >
      <Icon width={22} height={22} />
    </button>
  )
}
