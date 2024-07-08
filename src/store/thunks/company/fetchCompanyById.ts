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
      console.log(data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(fetchCompanyFailure(error.message))
    }
  }
}
