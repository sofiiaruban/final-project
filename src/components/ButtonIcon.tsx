import { FC, MouseEventHandler, ReactNode } from 'react'
import { ButtonColor, ButtonType } from './constants'

interface ButtonIconProps {
  children?: ReactNode
  classes?: string
  onClick?: MouseEventHandler<HTMLElement>
  type?: ButtonType
  color?: ButtonColor
}

const ButtonIcon: FC<ButtonIconProps> = ({
  children,
  classes,
  onClick,
  color,
  type = ButtonType.BUTTON
}) => {
  return (
    <button type={type} className={`${color} ${classes}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonIcon
