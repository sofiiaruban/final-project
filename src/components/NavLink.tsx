import { FC } from 'react'
import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom'

interface NavLinkProp extends NavLinkProps {
  to: string
}

const NavLink: FC<NavLinkProp> = ({ to, children }) => {
  return (
    <li>
      <RouterNavLink
        to={to}
        className={({ isActive }) =>
          isActive ? 'text-white' : 'text-white/50'
        }
      >
        {children}
      </RouterNavLink>
    </li>
  )
}

export default NavLink
