import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import {MouseEventHandler, useEffect, useState} from 'react';

interface ModalHookReturnType {
  openModal: () => void;
  closeModal: MouseEventHandler<HTMLElement>;
  modalPropagationHandle: MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
}

const useModal = (): ModalHookReturnType => {
  const [isOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body);

      return () => {
        enableBodyScroll(document.body);
      };
    }
  }, [isOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalPropagationHandle: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  return {
    openModal,
    closeModal,
    modalPropagationHandle,
    isOpen,
  };
};

export default useModal;