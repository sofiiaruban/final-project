import { Dispatch } from 'redux'
import { companyService } from '../../../api/company/companyService'
import {
  fetchCompaniesRequest,
  fetchCompaniesSuccess,
  fetchCompaniesFailure
} from '../../actions/company/companyActions'

export const fetchCompaniesByUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchCompaniesRequest())

    try {
      const data = await companyService.getAllByUser()
      console.log(data)
      dispatch(fetchCompaniesSuccess(data!))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(fetchCompaniesFailure(error.message))
    }
  }
}
