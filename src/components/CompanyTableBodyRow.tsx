import { Link } from 'react-router-dom'
import { AiFillEdit, AiFillCloseCircle } from 'react-icons/ai'
import { CgDetailsMore } from 'react-icons/cg'
import { ICompany } from '../types/types'
import ButtonIcon from './ButtonIcon'
import { ButtonType } from './constants'
import { AppRoute } from '../router/AppRoute'

interface CompanyTableBodyRowProps {
  company: ICompany
  openEditModal: () => void
  openDeleteModal: () => void
  setCompanyId: (id: number) => void
}

const CompanyTableBodyRow: React.FC<CompanyTableBodyRowProps> = ({
  company,
  openEditModal,
  openDeleteModal,
  setCompanyId
}) => {
  const handleEditClick = () => {
    if (company.id !== undefined) {
      setCompanyId(company.id)
      openEditModal()
    } else {
      console.error('Company ID is undefined or null')
    }
  }

  const handleDeleteClick = () => {
    if (company.id !== undefined) {
      setCompanyId(company.id)
      openDeleteModal()
    } else {
      console.error('Company ID is undefined or null')
    }
  }

  return (
    <tr className="flex items-center py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-600 gap-3 mb-2 justify-between">
      <td>{company.id}</td>
      <td>{company.name}</td>
      <td>{company.service}</td>
      <td className="flex justify-end gap-2">
        <Link to={`${AppRoute.COMPANIES}/${company.id}`} className="text-white">
          <ButtonIcon>
            <CgDetailsMore />
          </ButtonIcon>
        </Link>
        <ButtonIcon onClick={handleEditClick}>
          <AiFillEdit />
        </ButtonIcon>
        <ButtonIcon type={ButtonType.SUBMIT} onClick={handleDeleteClick}>
          <AiFillCloseCircle />
        </ButtonIcon>
      </td>
    </tr>
  )
}

export default CompanyTableBodyRow
