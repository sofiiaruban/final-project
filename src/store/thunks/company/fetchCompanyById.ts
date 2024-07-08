/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux'
import { companyService } from '../../../api/company/companyService'
import {
  fetchCompanyFailure,
  fetchCompanyRequest,
  fetchCompanySuccess
} from '../../actions/company/companyActions'

export const fetchCompanyById = (companyId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchCompanyRequest(companyId))
    try {
      const data = await companyService.getOneById(companyId)
      dispatch(fetchCompanySuccess(data!))
      return data
    } catch (error: any) {
      dispatch(fetchCompanyFailure(error.message))
    }
  }
}
