import { FC } from 'react'
import useProfile from '../hooks/useProfile'
import UserProfileForm from './UserProfileForm'
import Loader from '../components/Loader'

interface UpdateUserForm {
  userId: number
}
const UpdateUserForm: FC<UpdateUserForm> = ({ userId }) => {
  const { profile, loading, register, handleSubmit, isOpen, closeModal } =
    useProfile({
      userId
    })

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {profile && (
        <UserProfileForm
          handleSubmit={handleSubmit}
          register={register}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      )}
    </>
  )
}

export default UpdateUserForm
