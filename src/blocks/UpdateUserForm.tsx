/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from 'react'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import { IUserData } from '../types/types'
import Button from '../components/Button'
import { ButtonColor, ButtonType } from '../components/constants'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getProfile } from '../store/thunks/user/getUserProfile'
import { editUserProfile } from '../store/thunks/user/editUserProfile'

interface UpdateUserForm {
  userId: number
}
const UpdateUserForm: FC<UpdateUserForm> = ({ userId }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (userId) {
      dispatch(getProfile(+userId))
    }
  }, [])

  const profile = useAppSelector((state) => state.profile.userData)

  const defaultValues = {
    lastName: profile?.lastName,
    firstName: profile?.firstName,
    nickname: profile?.nickname,
    phoneNumber: profile?.phoneNumber,
    email: profile?.email,
    description: profile?.description,
    position: profile?.position,
    role: profile?.role
  }
  const { register, handleSubmit } = useForm<IUserData>({ defaultValues })

  const handleEditProfile = (data: any, e: any) => {
    e.preventDefault()
    if (data && userId) {
      dispatch(editUserProfile(+userId, data))
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleEditProfile)}
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
        <Button
          text="Close"
          isActive={false}
          onClick={() => {}}
          color={ButtonColor.ROSE}
        />
        <Button text={'Save'} isActive={false} type={ButtonType.SUBMIT} />
      </div>
    </form>
  )
}

export default UpdateUserForm
