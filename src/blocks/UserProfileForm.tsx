/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import Input from '../components/Input'
import GoBackButton from '../components/GoBackButton'
import Button from '../components/Button'
import { ButtonType } from '../components/constants'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import ModalBox from '../components/ModalBox'

interface UserProfileFormProps {
  handleSubmit: () => void
  register: UseFormRegister<FieldValues>
  isOpen: boolean
  closeModal: any
}

const UserProfileForm: FC<UserProfileFormProps> = ({
  handleSubmit,
  register,
  isOpen,
  closeModal
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto gap-1 text-white w-full"
    >
      <Input
        label="Email"
        name="email"
        placeholder="Email"
        register={register}
      />
      <Input
        label="Phone Number"
        name="phoneNumber"
        placeholder="Phone Number"
        register={register}
      />
      <Input
        label="Last Name"
        name="lastName"
        placeholder="Last Name"
        register={register}
      />
      <Input
        label="First Name"
        name="firstName"
        placeholder="First Name"
        register={register}
      />
      <Input
        label="Nickname"
        name="nickname"
        placeholder="Nickname"
        register={register}
      />
      <Input
        label="Description"
        name="description"
        placeholder="Description"
        register={register}
      />
      <Input
        label="Position"
        name="position"
        placeholder="Position"
        register={register}
      />
      <div className="flex gap-2">
        <GoBackButton />
        <Button text="Save" type={ButtonType.SUBMIT} />
      </div>
      <ModalBox isOpen={isOpen} closeModal={closeModal}>
        <p className="text-white">
          The profile update was completed successfully!
        </p>
      </ModalBox>
    </form>
  )
}

export default UserProfileForm
