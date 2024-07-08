import { FC } from 'react'
import { ICompany } from '../types/types'
import CompanyTableBodyRow from '../components/CompanyTableBodyRow'

interface CompanyTableBodyProps {
  companies: ICompany[]
  openEditModal: () => void
  openDeleteModal: () => void
  setCompanyId: (id: number) => void
}

const CompanyTableBody: FC<CompanyTableBodyProps> = ({
  companies,
  openEditModal,
  openDeleteModal,
  setCompanyId
}) => {
  return (
    <tbody>
      {companies &&
        companies.map((company) => (
          <CompanyTableBodyRow
            key={company.id}
            company={company}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
            setCompanyId={setCompanyId}
          />
        ))}
    </tbody>
  )
}

export default CompanyTableBody
