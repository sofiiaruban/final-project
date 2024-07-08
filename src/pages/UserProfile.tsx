import { useParams } from 'react-router-dom'
import UserProfileForm from '../blocks/UserProfileForm'
import useProfile from '../hooks/useProfile'
import Loader from '../components/Loader'

const Profile = () => {
  const params = useParams()
  const userId = params.id ? +params.id : undefined

  const { profile, loading, register, handleSubmit, isOpen, closeModal } =
    useProfile({ userId })

  if (loading) {
    return <Loader />
  }

  return (
    <div className="mt-3 flex w-1/3 flex-col mx-auto justify-center gap-1">
      <h1 className="text-xl font-semibold mb-0 text-center">
        Profile Information
      </h1>
      {profile && (
        <UserProfileForm
          handleSubmit={handleSubmit}
          register={register}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default Profile
