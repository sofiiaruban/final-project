import { ChangeEvent, FC } from 'react'
import { InputType } from './constants'

interface InputProps {
  label: string
  name: string
  value: string
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  type?: string
}

const Input: FC<InputProps> = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  type = InputType.TEXT
}) => {
  return (
    <label htmlFor={name} className="flex flex-col">
      <small>{label}</small>
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  )
}

export default Input
