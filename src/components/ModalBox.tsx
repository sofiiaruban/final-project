import { FC, MouseEventHandler, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import useModal from '../hooks/useModalBox'
import { IoClose } from 'react-icons/io5'
import ButtonIcon from './ButtonIcon'

interface ModalProps {
  isOpen: boolean
  children: ReactNode
  closeModal: MouseEventHandler<HTMLElement>
  title?: string
}

const ModalBox: FC<ModalProps> = ({ title, isOpen, children, closeModal }) => {
  const { modalPropagationHandle } = useModal()

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed top-0 left-0 bottom-0 right-0 w-screen h-full bg-black/50 flex justify-center items-center"
      role="dialog"
      onClick={closeModal}
    >
      <div
        className="grid gap-2 w-[300px] px-5 py-4 rounded bg-slate-900"
        onClick={modalPropagationHandle}
      >
        <div className="flex justify-between">
          <p className="text-white font-bold">{title}</p>
          <ButtonIcon
            onClick={closeModal}
            classes="text-white hover:text-white/50"
          >
            <IoClose />
          </ButtonIcon>
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default ModalBox
