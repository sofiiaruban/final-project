import { FC } from 'react'
import notFound from '../assets/404.png'
import accessDenied from '../assets/accessDenied.png'
import GoBackButton from '../components/GoBackButton'

interface ErrorPageProp {
  isAccessDenied?: boolean
}
const ErrorPage: FC<ErrorPageProp> = ({ isAccessDenied }) => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex justify-center items-center flex-col gap-10">
      {isAccessDenied ? (
        <img
          src={accessDenied}
          width={220}
          height={220}
          alt="access denied"
          className="pl-8"
        />
      ) : (
        <img src={notFound} />
      )}
      <div className="w-18">
        <GoBackButton />
      </div>
    </div>
  )
}

export default ErrorPage
