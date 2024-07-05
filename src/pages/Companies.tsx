import { FC } from 'react'
import { ICompany } from '../types/types'
import { Link } from 'react-router-dom'
import { CgDetailsMore } from 'react-icons/cg'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import ModalBox from '../components/ModalBox'
import useModal from '../hooks/useModalBox'

const companiesDummy = [
  {
    id: 1,
    name: 'Tech Innovators Inc.',
    employeeNumber: 120,
    service: 'Software Development',
    address: '1234 Elm St, Silicon Valley, CA',
    description:
      'A leading software development company specializing in AI and machine learning solutions.',
    companyType: 'Private'
  },
  {
    id: 2,
    name: 'Green Energy Solutions',
    employeeNumber: 85,
    service: 'Renewable Energy',
    address: '5678 Oak St, Austin, TX',
    description:
      'Providing innovative renewable energy solutions to reduce carbon footprint.',
    companyType: 'Public'
  },
  {
    id: 3,
    name: 'HealthCare Partners',
    employeeNumber: 200,
    service: 'Healthcare Services',
    address: '9101 Maple Ave, New York, NY',
    description:
      'Comprehensive healthcare services including primary care and specialty treatments.',
    companyType: 'Private'
  },
  {
    id: 4,
    name: 'FinTech Gurus',
    employeeNumber: 45,
    service: 'Financial Technology',
    address: '1122 Pine St, San Francisco, CA',
    description:
      'Developing cutting-edge financial technology applications for modern banking.',
    companyType: 'Public'
  },
  {
    id: 5,
    name: 'Eco-friendly Goods',
    employeeNumber: '30-50',
    service: 'Eco-friendly Products',
    address: '3344 Birch St, Portland, OR',
    description:
      'Creating and selling eco-friendly products to promote a sustainable lifestyle.',
    companyType: 'Private'
  }
]

const Companies: FC = () => {
  //const companies = useLoaderData() as ICompany[]
  const { isOpen, openModal, closeModal } = useModal()
  //const [setCompanyId] = useState<number>(0)
  //const [setIsEdit] = useState<boolean>(false)
  //const [setVisibleModal] = useState<boolean>(false)

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
            {companiesDummy.map((company: ICompany, index: number) => (
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
                      //setCompanyId(company.id)
                      //setVisibleModal(true)
                      //setIsEdit(true)
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
        onClick={openModal}
        className="max-w-fit flex items-center gap-2 text-white/50 hover: text-white"
      >
        <FaPlus />
        <span>Create a new company</span>
      </button>
      <ModalBox isOpen={isOpen} closeModal={closeModal} title="Company info">
        n
      </ModalBox>
      <ModalBox isOpen={isOpen} closeModal={closeModal} title="Company info">
        n
      </ModalBox>
      <ModalBox isOpen={isOpen} closeModal={closeModal} title="Company info">
        n
      </ModalBox>
      <ModalBox isOpen={isOpen} closeModal={closeModal} title="Company info">
        n
      </ModalBox>
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
