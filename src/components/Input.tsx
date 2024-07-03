import { FC } from 'react'
import { InputType } from './constants'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface InputProps {
  label: string
  name: string
  placeholder: string
  register: UseFormRegister<FieldValues>
  type?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validation?: any
}

const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  register,
  type = InputType.TEXT,
  validation,
  ...rest
}) => {
  return (
    <label htmlFor={name} className="flex flex-col">
      <small>{label}</small>
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        {...(register(name), { required: true, ...validation })}
        {...rest}
      />
    </label>
  )
}

export default Input
