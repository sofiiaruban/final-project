import { FC } from 'react'
import { ButtonColor, ButtonType } from './constants'

interface ButtonProps {
  text: string
  isActive: boolean
  onClick: () => void
  color?: ButtonColor
  isDisabled?: boolean
  type?: ButtonType
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  color = ButtonColor.GREEN,
  type = ButtonType.BUTTON,
  isDisabled
}) => {
  return (
    <button
      className={`${color}`}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}

export default Button
