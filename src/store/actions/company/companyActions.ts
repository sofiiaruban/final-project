import { ICompany } from '../../../types/types'
import * as actionTypes from './actionTypes'

export const fetchCompaniesRequest = () => ({
  type: actionTypes.FETCH_COMPANIES_REQUEST
})

export const fetchCompaniesSuccess = (companies: ICompany[]) => ({
  type: actionTypes.FETCH_COMPANIES_SUCCESS,
  payload: companies
})

export const fetchCompaniesFailure = (error: string) => ({
  type: actionTypes.FETCH_COMPANIES_FAILURE,
  payload: error
})

export const fetchCompanyRequest = (companyId: number) => ({
  type: actionTypes.FETCH_COMPANY_REQUEST,
  payload: companyId
})

export const fetchCompanySuccess = (company: ICompany) => ({
  type: actionTypes.FETCH_COMPANY_SUCCESS,
  payload: company
})
export const fetchCompanyFailure = (error: string) => ({
  type: actionTypes.FETCH_COMPANY_FAILURE,
  payload: error
})

export const addCompanyRequest = (company: ICompany) => ({
  type: actionTypes.ADD_COMPANY_REQUEST,
  payload: company
})
export const addCompanySuccess = (company: ICompany) => ({
  type: actionTypes.ADD_COMPANY_SUCCESS,
  payload: company
})
export const addCompanyFailure = (error: string) => ({
  type: actionTypes.ADD_COMPANY_FAILURE,
  payload: error
})

export const editCompanyRequest = (companyId: number, company: ICompany) => ({
  type: actionTypes.EDIT_COMPANY_REQUEST,
  payload: { companyId, company }
})
export const editCompanySuccess = (company: ICompany) => ({
  type: actionTypes.EDIT_COMPANY_SUCCESS,
  payload: company
})
export const editCompanyFailure = (error: string) => ({
  type: actionTypes.EDIT_COMPANY_FAILURE,
  payload: error
})

export const deleteCompanyRequest = (companyId: number) => ({
  type: actionTypes.DELETE_COMPANY_REQUEST,
  payload: companyId
})
export const deleteCompanySuccess = (companyId: number) => ({
  type: actionTypes.DELETE_COMPANY_SUCCESS,
  payload: companyId
})
export const deleteCompanyFailure = (error: string) => ({
  type: actionTypes.DELETE_COMPANY_FAILURE,
  payload: error
})

export const adminCompaniesRequest = () => ({
  type: actionTypes.ALL_COMPANIES_REQUEST
})

export const adminCompaniesSuccess = (companies: ICompany[]) => ({
  type: actionTypes.ALL_COMPANIES_SUCCESS,
  payload: companies
})

export const adminCompaniesFailure = (error: string) => ({
  type: actionTypes.ALL_COMPANIES_FAILURE,
  payload: error
})
