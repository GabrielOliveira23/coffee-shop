'use client'

import { type ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputRootProps extends ComponentProps<'div'> {
  isOptional?: boolean
}

export function InputRoot({
  isOptional = false,
  children,
  className,
  ...props
}: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex items-center justify-between p-3 rounded-sm border border-base-button bg-base-input focus-within:border focus-within:border-yellow-dark',
        className
      )}
      {...props}
    >
      {children}
      {isOptional && (
        <span className="italic text-xs text-base-label font-normal">
          Opcional
        </span>
      )}
    </div>
  )
}

type InputFieldProps = ComponentProps<'input'>

export function InputField({ className, type, ...props }: InputFieldProps) {
  const [value, setValue] = useState<number>()

  function handleChangeInputNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value

    if (inputValue.length <= 4) {
      setValue(Number(inputValue))
    }
  }

  if (type === 'number' && value)
    return (
      <input
        value={value}
        onChange={handleChangeInputNumber}
        className={twMerge(
          'group text-sm flex-1 outline-0 placeholder-text-sm placeholder-base-label',
          className
        )}
        {...props}
      />
    )

  return (
    <input
      className={twMerge(
        'group text-sm flex-1 outline-0 placeholder-text-sm placeholder-base-label',
        className
      )}
      {...props}
    />
  )
}
