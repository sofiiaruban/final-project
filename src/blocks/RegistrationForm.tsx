/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode } from 'react'
import { InputType } from '../components/constants'
import Input from '../components/Input'
import { IUserData } from '../types/types'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../store/hooks'
import { AppRoute } from '../router/AppRoute'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../store/thunks/auth/loginUser'
import { registerUser } from '../store/thunks/auth/registerUser'

interface RegistrationFormProps {
  defaultValues?: Record<string, any>
  children: ReactNode | ReactNode[]
  register?: any
  onSubmit?: (data: any) => void
  isLogin: boolean
}
const defaultValues: IUserData = {
  email: '',
  password: '',
  phoneNumber: '',
  lastName: '',
  firstName: '',
  nickname: '',
  description: '',
  position: ''
}
const RegistrationForm: FC<RegistrationFormProps> = ({ children, isLogin }) => {
  const { register, handleSubmit } = useForm<IUserData>({ defaultValues })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const submitHandler = (data: IUserData) => {
    if (isLogin) {
      dispatch(loginUser(data))
      navigate(AppRoute.HOME)
    }
    if (!isLogin) {
      dispatch(registerUser(data))
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex w-1/3 flex-col mx-auto gap-1"
    >
      <Input
        label="Email"
        name="email"
        placeholder="Email"
        register={register}
      />
      <Input
        type={InputType.PASSWORD}
        label="Password"
        name="password"
        placeholder="Password"
        register={register}
      />
      {!isLogin && (
        <>
          <Input
            label="Phone Number"
            name="phoneNumber"
            placeholder="Phone Number"
            register={register}
          />
          <Input
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
            register={register}
          />
          <Input
            label="First Name"
            name="firstName"
            placeholder="First Name"
            register={register}
          />
          <Input
            label="Nickname"
            name="nickname"
            placeholder="Nickname"
            register={register}
          />
          <Input
            label="Description"
            name="description"
            placeholder="Description"
            register={register}
          />
          <Input
            label="Position"
            name="position"
            placeholder="Position"
            register={register}
          />
        </>
      )}
      {children}
    </form>
  )
}

export default RegistrationForm
