/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux'
import { companyService } from '../../../api/company/companyService'
import { ICompany } from '../../../types/types'
import {
  addCompanyRequest,
  addCompanySuccess,
  addCompanyFailure
} from '../../actions/company/companyActions'

export const addCompany = (company: ICompany) => {
  return async (dispatch: Dispatch) => {
    dispatch(addCompanyRequest(company))
    try {
      const data = await companyService.addCompany(company)
      dispatch(addCompanySuccess(data!))
    } catch (error: any) {
      dispatch(addCompanyFailure(error.message))
    }
  }
}
