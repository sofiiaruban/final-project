import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getAllUsers } from '../store/thunks/user/getAllUsers'
import { IUserData } from '../types/types'
import { AiFillEdit } from 'react-icons/ai'
import ButtonIcon from '../components/ButtonIcon'
import ModalBox from '../components/ModalBox'
import useModal from '../hooks/useModalBox'
import UpdateUserForm from '../blocks/UpdateUserForm'
import { usersTableHeadings } from './constants'

const Users = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.profile.users)
  const [userId, setUserId] = useState<number>(0)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch, isOpen])

  return (
    <div className="mt-10 rounded-md bg-slate-800 p-4 w-[82%] mx-auto">
      <h1 className="text-xl font-semibold">Users List</h1>
      <div className="mt-2 flex-col mb-2">
        <table className="table-auto">
          <thead>
            <tr>
              {usersTableHeadings.map((heading) => (
                <th key={heading} className="font-bold p-2">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user: IUserData) => (
                <>
                  <tr key={user.id}>
                    <td className="p-2">{user.id}</td>
                    <td className="p-2">{user.firstName}</td>
                    <td className="p-2">{user.lastName}</td>
                    <td className="p-2">{user.nickname}</td>
                    <td className="p-2">{user.phoneNumber}</td>
                    <td className="p-2">{user.position}</td>
                    <td className="p-2">{user.role}</td>
                    <td className="p-2">{user.description}</td>
                    <td className="pl-2">
                      <ButtonIcon
                        onClick={() => {
                          setUserId(user.id || userId)
                          openModal()
                        }}
                      >
                        <AiFillEdit />
                      </ButtonIcon>
                    </td>
                  </tr>
                  <ModalBox
                    title="Edit User"
                    isOpen={isOpen}
                    closeModal={closeModal}
                  >
                    <UpdateUserForm userId={userId} />
                  </ModalBox>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
