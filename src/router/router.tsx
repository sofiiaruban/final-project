import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../pages/Layout'
import ErrorPage from '../pages/ErrorPage'
import Companies from '../pages/Companies'
import { AppRoute } from './AppRoute'
import Auth from '../pages/Auth'
import ProtectedRoute from '../pages/ProtectedRoute'
import CompanyDetails from '../pages/CompanyDetails'
import UserProfile from '../pages/UserProfile'
import Users from '../pages/Users'

const router = createBrowserRouter([
  {
    path: AppRoute.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: AppRoute.AUTH,
        element: <Auth />
      },
      {
        path: AppRoute.HOME,
        element: (
          <ProtectedRoute>
            <Companies />
          </ProtectedRoute>
        )
      },
      {
        path: AppRoute.COMPANY_DETAILS,
        element: (
          <ProtectedRoute>
            <CompanyDetails />
          </ProtectedRoute>
        )
      },
      {
        path: AppRoute.USERS,
        element: (
          <ProtectedRoute requireAdmin>
            <Users />
          </ProtectedRoute>
        )
      },
      {
        path: AppRoute.USER_PROFILE,
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        )
      }
    ]
  }
])

export default router
