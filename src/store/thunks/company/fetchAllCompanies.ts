/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux'
import { companyService } from '../../../api/company/companyService'
import {
  allCompaniesFailure,
  allCompaniesRequest,
  allCompaniesSuccess
} from '../../actions/company/companyActions'

export const fetchAllCompanies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(allCompaniesRequest())

    try {
      const data = await companyService.getAll()
      console.log(data)
      dispatch(allCompaniesSuccess(data!))
    } catch (error: any) {
      dispatch(allCompaniesFailure(error.message))
    }
  }
}
