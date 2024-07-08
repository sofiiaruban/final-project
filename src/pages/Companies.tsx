/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from 'react'
import { ICompany } from '../types/types'
import { Link } from 'react-router-dom'
import { CgDetailsMore } from 'react-icons/cg'
import { AiFillCloseCircle, AiFillEdit, AiOutlinePlus } from 'react-icons/ai'
import ModalBox from '../components/ModalBox'
import useModal from '../hooks/useModalBox'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { RootState } from '../store/store'
import ButtonIcon from '../components/ButtonIcon'
import { ButtonType } from '../components/constants'
import CompanyForm from '../blocks/CompanyForm'
import DeleteConfirmation from '../components/DeleteConfirmation'
import { deleteCompany } from '../store/thunks/company/deleteCompany'
import { fetchCompaniesByUser } from '../store/thunks/company/fetchCompaniesByUser'
import { fetchAllCompanies } from '../store/thunks/company/fetchAllCompanies'
import { useAuth } from '../hooks/useAuth'

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
  const [companyId, setCompanyId] = useState<number | undefined>(0)

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
            {companies &&
              companies.map((company: ICompany) => (
                <tr
                  key={company.id}
                  className="flex items-center py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 gap-3 mb-2 justify-between"
                >
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.service}</td>
                  <td className="flex justify-end gap-2">
                    <Link
                      to={`/companies/${company.id}`}
                      className="text-white"
                    >
                      <ButtonIcon>
                        <CgDetailsMore />
                      </ButtonIcon>
                    </Link>
                    <ButtonIcon
                      onClick={() => {
                        setCompanyId(company.id)
                        openEditModal()
                      }}
                    >
                      <AiFillEdit />
                    </ButtonIcon>
                    <ButtonIcon
                      type={ButtonType.SUBMIT}
                      onClick={() => {
                        setCompanyId(company.id)
                        openDeleteModal()
                      }}
                    >
                      <AiFillCloseCircle />
                    </ButtonIcon>
                  </td>
                </tr>
              ))}
          </tbody>
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
