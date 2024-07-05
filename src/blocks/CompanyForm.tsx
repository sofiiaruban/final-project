import { useForm } from 'react-hook-form'
import Input from '../components/Input'
import { ICompany } from '../types/types'
import { FC } from 'react'
import Button from '../components/Button'
import { ButtonColor } from '../components/constants'

const defaultValues = {
  id: 0,
  name: '',
  service: '',
  address: '',
  employeeNumber: 0,
  description: '',
  companyType: ''
}

interface CompanyFormProps {
  isAddMode?: boolean
}
const CompanyForm: FC = ({ isAddMode }) => {
  const { register, handleSubmit } = useForm<ICompany>({ defaultValues })
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex w-1/3 flex-col mx-auto gap-1"
    >
      <Input
        label="Company title"
        name="name"
        placeholder="Company title"
        register={register}
      />
      <Input
        label="Service of activity"
        name="service"
        placeholder="Service of activity"
        register={register}
      />
      <Input
        label="Address"
        name="address"
        placeholder="Address"
        register={register}
      />
      <Input
        label="Number of employees"
        name="employeeNumber"
        placeholder="Number of employees"
        register={register}
      />
      <Input
        label="Description"
        name="description"
        placeholder="Description"
        register={register}
      />
      <Input
        label="Type"
        name="companyType"
        placeholder="Type"
        register={register}
      />
      <div className="flex">
        <Button
          text="Close"
          isActive={false}
          onClick={() => {}}
          color={ButtonColor.ROSE}
        />
        <Button
          text={isAddMode ? 'Create' : 'Save'}
          isActive={false}
          onClick={() => {}}
        />
      </div>
    </form>
  )
}
export default CompanyForm
