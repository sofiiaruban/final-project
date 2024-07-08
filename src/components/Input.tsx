/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { InputType } from './constants'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface InputProps {
  label: string
  name: string
  placeholder: string
  register: UseFormRegister<FieldValues>
  type?: string
}

const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  register,
  type = InputType.TEXT,
  ...rest
}) => {
  return (
    <label htmlFor={name} className="flex flex-col">
      <small>{label}</small>
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        required
        {...register(name)}
        {...rest}
      />
    </label>
  )
}

export default Input
