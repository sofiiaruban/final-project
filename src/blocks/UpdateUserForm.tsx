/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from 'react'
//import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import { IUserData } from '../types/types'
//import Button from '../components/Button'
//import { ButtonColor, ButtonType } from '../components/constants'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getProfile } from '../store/thunks/user/getUserProfile'
import { editUserProfile } from '../store/thunks/user/editUserProfile'
import UserProfileForm from './UserProfileForm'
import useModal from '../hooks/useModalBox'

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
  const loading = useAppSelector((state) => state.profile.loading)

  const defaultValues = {
    lastName: profile?.lastName,
    firstName: profile?.firstName,
    nickname: profile?.nickname,
    phoneNumber: profile?.phoneNumber,
    email: profile?.email,
    description: profile?.description,
    position: profile?.position
  }
  const { register, handleSubmit } = useForm<IUserData>({ defaultValues })
  const { isOpen, openModal, closeModal } = useModal()

  const handleEditProfile = (data: any, e: any) => {
    e.preventDefault()
    if (data && userId) {
      const updatedProfile = dispatch(editUserProfile(+userId, data))
      if (updatedProfile) {
        openModal()
      }
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }
  
  return (
    <UserProfileForm
      handleSubmit={handleSubmit(handleEditProfile)}
      register={register}
      isOpen={isOpen}
      closeModal={closeModal}
    />
  )
}

export default UpdateUserForm
