import { ChangeEvent, FC, useState } from 'react'
import { IUserData } from '../types/types'
import RadioGroup from '../components/RadioGroup.tsx/RadioGroup'
import Input from '../components/Input'
import { InputType } from '../components/constants'
import RegistrationInputs from '../blocks/RegistrationInputs'
//import { AuthService } from '../services/auth.service'
//import { toast } from 'react-toastify'
//import { setTokenToLocalStorage } from '../helpers/localstorage.helper'
//import { useAppDispatch } from '../store/hooks'
//import { login } from '../store/user/userSlice'
//import { useNavigate } from 'react-router-dom'
//import { IUserData } from '../types/types'
//import { ProfileInputs } from '../components/ProfileInputs'

const Auth: FC = () => {
  const [isLogIn] = useState<boolean>(true)
  const [authData, setAuthData] = useState<IUserData>({
    email: '',
    password: '',
    phoneNumber: '',
    lastName: '',
    firstName: '',
    nickname: '',
    description: '',
    position: ''
  })
  //const dispatch = useAppDispatch()
  //const navigate = useNavigate()

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const name = e.target.name

    setAuthData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const loginHandler = async () => {
    //e: React.FormEvent<HTMLFormElement>
    // try {
    //   e.preventDefault()
    //   const data = await AuthService.login({
    //     email: authData.email,
    //     password: authData.password
    //   })
    //   if (data) {
    //     setTokenToLocalStorage('token', data.token)
    //     dispatch(login(data))
    //     toast.success('You logged in')
    //     navigate('/companies')
    //   }
    // } catch (err: any) {
    //   const error = err.response?.data.message
    //   toast.error(error.toString())
    // }
  }

  const registrationHandler = async () => {
    //e: React.FormEvent<HTMLFormElement>
    // try {
    //   e.preventDefault()
    //   const data = await AuthService.registration(authData)
    //   if (data) {
    //     toast.success('Account has been created')
    //     setIsLogIn(!isLogIn)
    //   }
    // } catch (err: any) {
    //   const error = err.response?.data.message
    //   toast.error(error.toString())
    // }
  }

  const handleRadioChange = (value: string) => {
    console.log('Selected option:', value)
  }

  return (
    <div className="mt-2 flex flex-col justify-center items-center  text-white">
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
      <form
        className="flex w-1/3 flex-col mx-auto gap-1"
        onSubmit={isLogIn ? loginHandler : registrationHandler}
      >
        <Input
          label="Email"
          name="email"
          value={authData.email || ''}
          placeholder="Email"
          onChange={changeHandler}
        />
        <Input
          type={InputType.PASSWORD}
          label="Password"
          name="password"
          value={authData.password || ''}
          placeholder="Password"
          onChange={changeHandler}
        />
        {!isLogIn && (
          <RegistrationInputs
            authData={authData}
            changeHandler={changeHandler}
          />
        )}
        <button className="btn mt-1 btn-green mx-auto">Submit</button>
      </form>
    </div>
  )
}
export default Auth
