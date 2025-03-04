import type { ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  isOptional?: boolean
}

export function InputRoot({
  isOptional = false,
  children,
  ...props
}: InputRootProps) {
  return (
    <div
      className="p-3 rounded-sm border border-base-button bg-base-input focus-within:border focus-within:border-yellow-dark"
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

export function InputField(props: InputFieldProps) {
  return (
    <input
      type="text"
      className="group text-sm flex-1 outline-0 placeholder-text-sm placeholder-base-label"
      required={props.required}
      {...props}
    />
  )
}
