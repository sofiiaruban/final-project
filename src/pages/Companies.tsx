/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import ModalBox from '../components/ModalBox'
import useModal from '../hooks/useModalBox'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { RootState } from '../store/store'
import ButtonIcon from '../components/ButtonIcon'
import CompanyForm from '../blocks/CompanyForm'
import DeleteConfirmation from '../components/DeleteConfirmation'
import { deleteCompany } from '../store/thunks/company/deleteCompany'
import { fetchCompaniesByUser } from '../store/thunks/company/fetchCompaniesByUser'
import { fetchAllCompanies } from '../store/thunks/company/fetchAllCompanies'
import { useAuth } from '../hooks/useAuth'
import TableHeader from '../components/TableHeader'
import CompanyTableBody from '../blocks/CompanyTableBody'
import { companiesTableHeadings } from './constants'

const Companies: FC = () => {
  const {
    isOpen: isCreateModalOpen,
    openModal: openCreateModal,
    closeModal: closeCreateModal
  } = useModal()
  const {
    isOpen: isEditModalOpen,
    openModal: openEditModal,
    closeModal: closeEditModal
  } = useModal()
  const {
    isOpen: isDeleteModalOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal
  } = useModal()
  const dispatch = useAppDispatch()
  const [companyId, setCompanyId] = useState<number>(0)

  const companies = useAppSelector(
    (state: RootState) => state.company.companies
  )

  const { isAdmin } = useAuth()

  useEffect(() => {
    if (isAdmin) {
      dispatch(fetchAllCompanies())
    }
    if (!isAdmin) {
      dispatch(fetchCompaniesByUser())
    }
  }, [dispatch, isDeleteModalOpen, isEditModalOpen, isCreateModalOpen, isAdmin])

  const handleDeleteCompany = (event: any) => {
    if (companyId) {
      dispatch(deleteCompany(companyId))
      closeDeleteModal(event)
    }
  }

  return (
    <div className="mt-10 rounded-md bg-neutral-800 p-4 w-1/2 mx-auto">
      <h1 className="text-xl font-semibold">Companies List</h1>
      <div className="mt-2 flex-col mb-2">
        <table className="w-full table-auto">
          <TableHeader headers={companiesTableHeadings} />
          <CompanyTableBody
            companies={companies}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
            setCompanyId={setCompanyId}
          />
        </table>
      </div>
      <ButtonIcon
        onClick={openCreateModal}
        classes="max-w-fit flex items-center gap-2 text-white/50 hover:text-white"
      >
        <AiOutlinePlus />
        <span>Create a new company</span>
      </ButtonIcon>
      <ModalBox
        isOpen={isCreateModalOpen}
        closeModal={closeCreateModal}
        title="Create a new company"
      >
        <CompanyForm isAddMode closeModal={closeCreateModal} />
      </ModalBox>
      <ModalBox
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        title={`Edit company id: ${companyId}`}
      >
        <CompanyForm companyId={companyId} closeModal={closeEditModal} />
      </ModalBox>
      <ModalBox
        isOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        title={`Delete company id: ${companyId}`}
      >
        <DeleteConfirmation
          onClick={handleDeleteCompany}
          onClose={closeDeleteModal}
        />
      </ModalBox>
    </div>
  )
}
export default Companies
