/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useEffect } from 'react'
import { getProfile } from '../store/thunks/user/getUserProfile'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { ButtonColor, ButtonType } from '../components/constants'
import { ICompany } from '../types/types'
import { editUserProfile } from '../store/thunks/user/editUserProfile'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../router/AppRoute'
import ModalBox from '../components/ModalBox'
import useModal from '../hooks/useModalBox'
import { useAuth } from '../hooks/useAuth'

const Profile = () => {
  const dispatch = useAppDispatch()
  const params = useParams()
  const userId = params.id
  const { isAdmin } = useAuth()
  
  useEffect(() => {
    if (userId) {
      dispatch(getProfile(+userId))
    }
  }, [])

  const profile = useAppSelector((state) => state.profile.userData)
  const loading = useAppSelector((state) => state.profile.loading)
  console.log(profile)
  const navigate = useNavigate()

  const defaultValues = {
    lastName: profile?.lastName,
    firstName: profile?.firstName,
    nickname: profile?.nickname,
    phoneNumber: profile?.phoneNumber,
    email: profile?.email,
    description: profile?.description,
    position: profile?.position
  }

  const { register, handleSubmit } = useForm<ICompany>({
    defaultValues
  })
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

  const navigateToHome = () => {
    isAdmin ? navigate(-1) : AppRoute.HOME
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="mt-3 flex w-1/3 flex-col mx-auto justify-center gap-1">
      <h1 className="text-xl font-semibold mb-0 text-center">
        Profile Information
      </h1>
      {profile && (
        <form onSubmit={handleSubmit(handleEditProfile)}>
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
            label="Position"
            name="position"
            placeholder="Position"
            register={register}
          />
          <Input
            label="Description"
            name="description"
            placeholder="Description"
            register={register}
          />
          <div className="flex gap-2">
            <Button
              text="Go Back"
              isActive={false}
              onClick={navigateToHome}
              color={ButtonColor.ROSE}
            />
            <Button text="Save" isActive={false} type={ButtonType.SUBMIT} />
          </div>
        </form>
      )}
      <ModalBox isOpen={isOpen} closeModal={closeModal}>
        <p className="text-white">
          The profile update was completed successfully!
        </p>
      </ModalBox>
    </div>
  )
}

export default Profile
