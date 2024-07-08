/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useLayoutEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchCompanyById } from '../store/thunks/company/fetchCompanyById'
import { useParams } from 'react-router-dom'
import GoBackButton from '../components/GoBackButton'

const CompanyDetails: FC = () => {
  const dispatch = useAppDispatch()
  const params = useParams()
  const companyId = params.id
  const [error, setError] = useState<string | null>(null)

  const company = useAppSelector((state) => state.company.company)
  const companyLoading = useAppSelector((state) => state.company.loading)

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        if (companyId) {
          await dispatch(fetchCompanyById(+companyId))
        }
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchData()

    return () => {}
  }, [companyId, dispatch])

  if (companyLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <>
      {companyLoading && <>Loading...</>}
      {company && !companyLoading && (
        <div className="flex flex-col mx-auto items-center justify-center mt-10">
          <h2 className="text-2xl mb-10 uppercase">{company.name}</h2>
          <table className="flex flex-col gap-2 w-1/3">
            <tbody className="flex flex-col gap-2">
              <tr className="p-2 rounded-lg bg-blue-600 mb-2 hover:bg-blue-400">
                <td className="font-semibold pr-2">Id:</td>
                <td>{company.id}</td>
              </tr>
              <tr className="p-2 rounded-lg bg-blue-600 mb-2 hover:bg-blue-400">
                <td className="font-semibold pr-2">Address:</td>
                <td>{company.address}</td>
              </tr>
              <tr className="p-2 rounded-lg bg-blue-600 mb-2 hover:bg-blue-400">
                <td className="font-semibold pr-2">Service of activity:</td>
                <td>{company.service}</td>
              </tr>
              <tr className="py-2 px-3 rounded-lg bg-blue-600 mb-2 hover:bg-blue-400">
                <td className="font-semibold pr-2">Number of employees:</td>
                <td>{company.employeeNumber}</td>
              </tr>
              <tr className="py-2 px-3 rounded-lg bg-blue-600 mb-2 hover:bg-blue-400">
                <td className="font-semibold pr-2">Description:</td>
                <td>{company.description}</td>
              </tr>
              <tr className="py-2 px-3 rounded-lg bg-blue-600 mb-2 hover:bg-blue-400">
                <td className="font-semibold pr-2">Type:</td>
                <td>{company.companyType}</td>
              </tr>
            </tbody>
            <GoBackButton />
          </table>
        </div>
      )}
    </>
  )
}

export default CompanyDetails
