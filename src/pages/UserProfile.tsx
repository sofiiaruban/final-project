/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useEffect } from 'react'
import { getProfile } from '../store/thunks/user/getUserProfile'
import { useForm } from 'react-hook-form'
import { ICompany } from '../types/types'
import { editUserProfile } from '../store/thunks/user/editUserProfile'
import useModal from '../hooks/useModalBox'
import UserProfileForm from '../blocks/UserProfileForm'

const Profile = () => {
  const dispatch = useAppDispatch()
  const params = useParams()
  const userId = params.id

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

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="mt-3 flex w-1/3 flex-col mx-auto justify-center gap-1">
      <h1 className="text-xl font-semibold mb-0 text-center">
        Profile Information
      </h1>
      {profile && (
        <UserProfileForm
          handleSubmit={handleSubmit(handleEditProfile)}
          register={register}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default Profile
