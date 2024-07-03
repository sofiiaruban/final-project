import { FC } from 'react'

interface ReusableRadioButtonProps {
  name: string
  value: string
  label: string
  isChecked: boolean
  onChange: (value: string) => void
}

const RadioButton: FC<ReusableRadioButtonProps> = ({
  name,
  value,
  label,
  isChecked,
  onChange
}) => {
  return (
    <label className={`${isChecked ? 'font-bold' : ''} cursor-pointer`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        className="hidden"
      />
      {label}
    </label>
  )
}

export default RadioButton
