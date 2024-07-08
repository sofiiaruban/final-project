import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FaSignOutAlt } from 'react-icons/fa'
import { TbBuildingWarehouse } from 'react-icons/tb'
import { AppRoute } from '../router/AppRoute'
import { useAuth } from '../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { logout } from '../store/reducers/user/userSlice'
import { removeTokenFromLocalStorage } from '../helpers/getTokenFromLocalStorage'
import { useAppSelector } from '../store/hooks'
import { ButtonColor } from '../components/constants'
import ButtonIcon from '../components/ButtonIcon'
import NavLink from '../components/NavLink'

export const Header: FC = () => {
  const { isAuth, isAdmin } = useAuth()
  const dispatch = useDispatch()
  const userId = useAppSelector((state) => state.user.id)
  console.log(isAuth, isAdmin)
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    removeTokenFromLocalStorage('token')
    navigate(AppRoute.AUTH)
  }

  return (
    <header className="flex items-center text-xl justify-between bg-slate-800 px-6 py-3 shadow-sm backdrop-blur-sm">
      <Link to={AppRoute.HOME}>
        <TbBuildingWarehouse size={30} />
      </Link>
      <ul className="flex items-center gap-5 ml-auto mr-10">
        {isAuth && <NavLink to={AppRoute.HOME} children="Companies" />}
        {isAdmin && <NavLink to={AppRoute.USERS} children="Users" />}
        {isAuth && (
          <NavLink to={`${AppRoute.USERS}/${userId}`} children="Profile" />
        )}
      </ul>
      {isAuth ? (
        <ButtonIcon
          color={ButtonColor.ROSE}
          classes="btn"
          onClick={logoutHandler}
        >
          <span>Log Out</span>
          <FaSignOutAlt />
        </ButtonIcon>
      ) : (
        <Link className="py-2 text-white/50 hover: text-white" to={'auth'}>
          Auth
        </Link>
      )}
    </header>
  )
}
