/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode } from 'react'
import { InputType } from './constants'
import Input from './Input'
import { emailValidator } from '../helpers/emailValidator'

interface FormProps {
  defaultValues?: Record<string, any>
  children: ReactNode | ReactNode[]
  register: any
  onSubmit: (data: any) => void
  isLogin: boolean
}

const Form: FC<FormProps> = ({ children, isLogin, onSubmit, register }) => {
  return (
    <form onSubmit={onSubmit} className="flex w-1/3 flex-col mx-auto gap-1">
      <Input
        label="Email"
        name="email"
        placeholder="Email"
        register={register}
        validation={emailValidator}
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

export default Form
