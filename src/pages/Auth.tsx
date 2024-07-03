import { FC, useState } from 'react'
import { IUserData } from '../types/types'
import RadioGroup from '../components/RadioGroup.tsx/RadioGroup'

import { useForm } from 'react-hook-form'
//import { emailValidation } from '../helpers/emailValidation'
import Form from '../components/Form'
//import { AuthService } from '../services/auth.service'
//import { toast } from 'react-toastify'
//import { setTokenToLocalStorage } from '../helpers/localstorage.helper'
//import { useAppDispatch } from '../store/hooks'
//import { login } from '../store/user/userSlice'
//import { useNavigate } from 'react-router-dom'
//import { IUserData } from '../types/types'
//import { ProfileInputs } from '../components/ProfileInputs'

const Auth: FC = () => {
  const [isLogin] = useState<boolean>(false)
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
  const { register, handleSubmit } = useForm<IUserData>({
    defaultValues
  })

  //const dispatch = useAppDispatch()
  //const navigate = useNavigate()

  //const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //  const value = e.target.value
  //  const name = e.target.name
  //
  //  setAuthData((prevData) => ({
  //    ...prevData,
  //    [name]: value
  //  }))
  //}

  // const loginHandler = async () => {
  //   //e: React.FormEvent<HTMLFormElement>
  //   // try {
  //   //   e.preventDefault()
  //   //   const data = await AuthService.login({
  //   //     email: authData.email,
  //   //     password: authData.password
  //   //   })
  //   //   if (data) {
  //   //     setTokenToLocalStorage('token', data.token)
  //   //     dispatch(login(data))
  //   //     toast.success('You logged in')
  //   //     navigate('/companies')
  //   //   }
  //   // } catch (err: any) {
  //   //   const error = err.response?.data.message
  //   //   toast.error(error.toString())
  //   // }
  // }

  // const registrationHandler = async () => {
  //   //e: React.FormEvent<HTMLFormElement>
  //   // try {
  //   //   e.preventDefault()
  //   //   const data = await AuthService.registration(authData)
  //   //   if (data) {
  //   //     toast.success('Account has been created')
  //   //     setIsLogIn(!isLogIn)
  //   //   }
  //   // } catch (err: any) {
  //   //   const error = err.response?.data.message
  //   //   toast.error(error.toString())
  //   // }
  // }

  const handleRadioChange = (value: string) => {
    console.log('Selected option:', value)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitHandler = (data: any) => {
    if (isLogin) {
      console.log('Login data:', data)
      // Implement login logic
    } else {
      console.log('Registration data:', data)
      // Implement registration logic
    }
  }

  return (
    <div className="mt-2 flex flex-col justify-center items-center text-white">
      <div className="flex mb-2 gap-2">
        <RadioGroup
          name="auth"
          options={[
            { value: 'signUp', label: 'Sign Up' },
            { value: 'signIn', label: 'Sign In' }
          ]}
          defaultValue="signUp"
          onChange={handleRadioChange}
        />
      </div>
      <Form
        onSubmit={handleSubmit(submitHandler)}
        register={register}
        defaultValues={defaultValues}
        isLogin={isLogin}
      >
        <button className="btn mt-1 btn-green mx-auto">Submit</button>
      </Form>
    </div>
  )
}
export default Auth
