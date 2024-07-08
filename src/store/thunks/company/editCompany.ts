/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux'
import {
  editCompanyFailure,
  editCompanyRequest,
  editCompanySuccess
} from '../../actions/company/companyActions'
import { companyService } from '../../../api/company/companyService'
import { ICompany } from '../../../types/types'

export const editCompany = (companyId: number, editedCompany: ICompany) => {
  return async (dispatch: Dispatch) => {
    dispatch(editCompanyRequest(companyId, editedCompany))
    try {
      const data = await companyService.editCompany(editedCompany, companyId)
      dispatch(editCompanySuccess(data!))
    } catch (error: any) {
      dispatch(editCompanyFailure(error.message))
    }
  }
}
