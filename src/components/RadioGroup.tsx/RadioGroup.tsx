import React, { useState } from 'react'
import RadioButton from './RadioButton.tsx/RadioButton'

interface RadioGroupProps {
  name: string
  options: { value: string; label: string }[]
  defaultValue: string
  onChange: (value: string) => void
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  defaultValue,
  onChange
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue)

  const handleOptionChange = (value: string) => {
    setSelectedOption(value)
    onChange(value)
  }

  return (
    <>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          isChecked={selectedOption === option.value}
          onChange={handleOptionChange}
        />
      ))}
    </>
  )
}

export default RadioGroup
