
import { Link } from 'react-router-dom'
import accessDenied from '../assets/accessDenied.png'
import { AppRoute } from '../router/AppRoute'

const AccessDenied = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex justify-center items-center flex-col gap-10">
      <img src={accessDenied} />
      <Link
        to={AppRoute.HOME}
        className="bg-teal-400 text-lg hover:bg-teal-500 rounded-lg px-8 py-2 font-semibold"
      >
        Back
      </Link>
    </div>
  )
}

export default AccessDenied
