import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TagProps = ComponentProps<'span'>

export function Tag({className, ...props}: TagProps) {
  return (
    <span
      className={twMerge(
        'tag flex items-center justify-center px-2 py-1 rounded-full text-yellow-dark bg-yellow-light',
        className
      )}
      {...props}
    />
  )
}
