import { Trash2 } from 'lucide-react'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'button-lg flex w-full min-w-33 max-h-[46px] items-center justify-center py-3 px-2 rounded-md text-base-button bg-yellow hover:bg-yellow-dark cursor-pointer',
        className
      )}
      {...props}
    />
  )
}

export function RemoveButton({ className, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'button-md group flex flex-row gap-1 min-h-[32px] items-center justify-center px-2 rounded-md cursor-pointer bg-base-button text-base-text hover:bg-base-hover ',
        className
      )}
      {...props}
    >
      {children ? (
        children
      ) : (
        <>
          <Trash2
            className="text-purple group-hover:text-purple-dark"
            width={16}
            height={16}
          />
          <span>Remover</span>
        </>
      )}
    </button>
  )
}
