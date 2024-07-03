import React from 'react'

interface ReusableButtonProps {
  text: string
  isActive: boolean
  onClick: () => void
}

const Button: React.FC<ReusableButtonProps> = ({ text, isActive, onClick }) => {
  return (
    <button
      className={`${isActive ? 'font-bold' : ''} btn btn-grey`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  )
}

export default Button
