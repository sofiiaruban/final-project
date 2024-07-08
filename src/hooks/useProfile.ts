/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getProfile } from '../store/thunks/user/getUserProfile'
import { IUserData } from '../types/types'
import useModal from './useModalBox'
import { editUserProfile } from '../store/thunks/user/editUserProfile'

interface UseProfileProps {
  userId?: number
}

const useProfile = ({ userId }: UseProfileProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (userId) {
      dispatch(getProfile(userId))
    }
  }, [dispatch, userId])

  const profile = useAppSelector((state) => state.profile.userData)
  const loading = useAppSelector((state) => state.profile.loading)

  const { register, handleSubmit, setValue } = useForm<IUserData>({
    defaultValues: {
      lastName: profile?.lastName || '',
      firstName: profile?.firstName || '',
      nickname: profile?.nickname || '',
      phoneNumber: profile?.phoneNumber || '',
      email: profile?.email || '',
      description: profile?.description || '',
      position: profile?.position || ''
    }
  })

  const { isOpen, openModal, closeModal } = useModal()

  const handleEditProfile = (data: any, e: any) => {
    e.preventDefault()
    if (userId && data) {
      dispatch(editUserProfile(userId, data))
      openModal()
    }
  }

  return {
    profile,
    loading,
    register,
    handleSubmit: handleSubmit(handleEditProfile),
    isOpen,
    openModal,
    closeModal,
    setValue
  }
}

export default useProfile
