import { createBrowserRouter } from 'react-router-dom'
//import ProtectedRoute from '../pages/ProtectedRoute'
import { Layout } from '../pages/Layout'
import ErrorPage from '../pages/ErrorPage'
import Companies from '../pages/Companies'
import Admin from '../pages/Admin'
import { AppRoute } from './AppRoute'
import Auth from '../pages/Auth'

// Function to get the access token from cookies
//const getAccessToken = () => {
//  return Cookies.get('accessToken');
//}
//
//// Function to check if the user is authenticated
//const isAuthenticated = () => {
//  return !!getAccessToken();
//}

const router = createBrowserRouter([
  {
    path: AppRoute.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: AppRoute.HOME,
        element: <Companies />
      },
      { path: AppRoute.AUTH, element: <Auth /> },
      {
        path: AppRoute.ADMIN,
        element: <Admin />
      }
    ]
  }
])

export default router
