import { ChangeEvent, FC } from 'react'
import Input from '../components/Input'
import { IUserData } from '../types/types'

interface RegistrationInputsProps {
  authData: IUserData
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const RegistrationInputs: FC<RegistrationInputsProps> = ({
  authData,
  changeHandler
}) => {
  return (
    <>
      <Input
        label="Phone Number"
        name="phoneNumber"
        value={authData.phoneNumber || ''}
        placeholder="Phone Number"
        onChange={changeHandler}
      />
      <Input
        label="Last Name"
        name="phoneNumber"
        value={authData.lastName || ''}
        placeholder="Last Name"
        onChange={changeHandler}
      />
      <Input
        label="First Name"
        name="firstName"
        value={authData.firstName || ''}
        placeholder="First Name"
        onChange={changeHandler}
      />
      <Input
        label="Nickname"
        name="nickname"
        value={authData.nickname || ''}
        placeholder="Nickname"
        onChange={changeHandler}
      />
      <Input
        label="Description"
        name="description"
        value={authData.description || ''}
        placeholder="Description"
        onChange={changeHandler}
      />
      <Input
        label="Position"
        name="position"
        value={authData.position || ''}
        placeholder="Position"
        onChange={changeHandler}
      />
    </>
  )
}
export default RegistrationInputs
