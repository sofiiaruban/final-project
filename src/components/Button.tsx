import { FC } from 'react'
import { ButtonColor, ButtonType } from './constants'

interface ButtonProps {
  text: string
  onClick?: () => void
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
      className={`btn ${color} mt-2 mx-auto w-full`}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}

export default Button
