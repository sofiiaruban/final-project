/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form'
import Input from '../components/Input'
import { ICompany } from '../types/types'
import { FC, useEffect } from 'react'
import Button from '../components/Button'
import { ButtonColor, ButtonType } from '../components/constants'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addCompany } from '../store/thunks/company/addCompany'
import { fetchCompanyById } from '../store/thunks/company/fetchCompanyById'
import { editCompany } from '../store/thunks/company/editCompany'
import Loader from '../components/Loader'

interface CompanyFormProps {
  isAddMode?: boolean
  companyId?: number
  closeModal: any
}
const CompanyForm: FC<CompanyFormProps> = ({
  isAddMode,
  companyId,
  closeModal
}) => {
  const dispatch = useAppDispatch()
  const company = useAppSelector((state) => state.company.company)
  const companyLoading = useAppSelector((state) => state.company.loading)

  const defaultValues: ICompany = {
    name: isAddMode ? '' : company?.name,
    service: isAddMode ? '' : company?.service,
    address: isAddMode ? '' : company?.address,
    employeeNumber: isAddMode ? 0 : company?.employeeNumber,
    description: isAddMode ? '' : company?.description,
    companyType: isAddMode ? '' : company?.companyType
  }

  const { register, handleSubmit, reset } = useForm<ICompany>({
    defaultValues
  })

  useEffect(() => {
    if (companyId) {
      dispatch(fetchCompanyById(companyId))
    }
  }, [companyId, dispatch])

  useEffect(() => {
    reset(company)
    reset(defaultValues)
  }, [company, reset, isAddMode])

  const submitHandler = (data: ICompany, event: unknown) => {
    if (isAddMode && !companyId) {
      dispatch(addCompany(data))
    }
    if (!isAddMode && companyId) {
      dispatch(editCompany(companyId!, data))
    }
    closeModal(event)
  }

  if (companyLoading) {
    return <Loader />
  }

  return (
    <>
      {
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex w-full flex-col mx-auto gap-1 text-white"
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
          <div className="flex gap-2">
            <Button
              text="Cancel"
              onClick={closeModal}
              color={ButtonColor.ROSE}
            />
            <Button
              text={isAddMode ? 'Create' : 'Save'}
              type={ButtonType.SUBMIT}
            />
          </div>
        </form>
      }
    </>
  )
}
export default CompanyForm
