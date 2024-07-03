import { FC } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/404.png'
import { AppRoute } from '../router/AppRoute'

const ErrorPage: FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex justify-center items-center flex-col gap-10">
      <img src={img} />
      <Link
        to={AppRoute.HOME}
        className="bg-teal-400 text-lg hover:bg-teal-500 rounded-lg px-8 py-2 font-semibold"
      >
        Back
      </Link>
    </div>
  )
}

export default ErrorPage
