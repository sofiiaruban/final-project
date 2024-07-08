/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux'
import {
  deleteCompanyFailure,
  deleteCompanyRequest,
  deleteCompanySuccess
} from '../../actions/company/companyActions'
import { companyService } from '../../../api/company/companyService'

export const deleteCompany = (companyId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(deleteCompanyRequest(companyId))
    try {
      const data = await companyService.deleteCompany(companyId)
      dispatch(deleteCompanySuccess(data!))
    } catch (error: any) {
      dispatch(deleteCompanyFailure(error.message))
    }
  }
}
