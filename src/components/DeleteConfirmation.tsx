/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { ButtonColor } from './constants'
import Button from './Button'

interface DeleteConfirmationProps {
  onClose: any
  onClick: any
}
const DeleteConfirmation: FC<DeleteConfirmationProps> = ({
  onClick,
  onClose
}) => {
  return (
    <>
      <p className="text-white">
        Are you sure that you want to delete the company?
      </p>
      <div className="flex gap-2">
        <Button text="Cancel" onClick={onClose} color={ButtonColor.ROSE} />
        <Button text="Confirm" onClick={onClick} />
      </div>
    </>
  )
}

export default DeleteConfirmation
