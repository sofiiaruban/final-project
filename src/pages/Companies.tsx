import { FC, useState } from 'react'
import { ICompany } from '../types/types'
import { Link } from 'react-router-dom'
import { CgDetailsMore } from 'react-icons/cg'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'

const Companies: FC = () => {
  //const companies = useLoaderData() as ICompany[]
  const [companyId, setCompanyId] = useState<number>(0)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [visibleModal, setVisibleModal] = useState<boolean>(false)

  return (
    <div className="mt-10 rounded-md bg-slate-800 p-4 w-1/2 mx-auto">
      <h1 className="text-xl font-semibold">Your Companies List</h1>
      <div className="mt-2 flex-col mb-2">
        <table className="w-full table-auto">
          <thead>
            <tr className="flex items-center py-2 px-4 justify-between">
              <th className="font-bold">Id</th>
              <th className="font-bold">Name</th>
              <th className="font-bold">Service</th>
              <th className="font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company: ICompany, index: number) => (
              <tr
                key={index}
                className="flex items-center py-2 px-3 rounded-lg bg-blue-600 gap-3 mb-2 justify-between"
              >
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.service}</td>
                <td className="flex justify-end gap-2">
                  <Link to={`/companies/${company.id}`} className="text-white">
                    <button>
                      <CgDetailsMore />
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      setCompanyId(company.id)
                      setVisibleModal(true)
                      setIsEdit(true)
                    }}
                  >
                    <AiFillEdit />
                  </button>
                  {/* <Form className="flex" method="delete" action="/companies"> */}
                  <input type="hidden" value={company.id} name="id" />
                  <button type="submit">
                    <AiFillCloseCircle />
                  </button>
                  {/* </Form> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => setVisibleModal(true)}
        className="max-w-fit flex items-center gap-2 text-white/50 hover: text-white"
      >
        <FaPlus />
        <span>Create a new company</span>
      </button>
      {/* {visibleModal && (
        <CompanyModal
          type={'post'}
          id={undefined}
          setVisibleModal={setVisibleModal}
        />
      )}
      {visibleModal && isEdit && (
        <CompanyModal
          type={'patch'}
          id={companyId}
          setVisibleModal={setVisibleModal}
        />
      )} */}
    </div>
  )
}
export default Companies
