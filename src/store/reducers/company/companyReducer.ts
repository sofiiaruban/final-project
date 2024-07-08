/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICompany } from '../../../types/types'
import * as actionTypes from '../../actions/company/actionTypes'

interface CompanyState {
  companies: ICompany[]
  company: ICompany | null
  loading: boolean
  error: string | null
}

const initialState: CompanyState = {
  companies: [],
  company: null,
  loading: false,
  error: null
}

const companyReducer = (state = initialState, action: any): CompanyState => {
  switch (action.type) {
    case actionTypes.FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        companies: action.payload
      }
    case actionTypes.FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload
      }
    case actionTypes.FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.ALL_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        companies: action.payload
      }
    case actionTypes.ALL_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload
      }
    case actionTypes.ALL_COMPANIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.FETCH_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        company: null
      }
    case actionTypes.FETCH_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        company: action.payload
      }
    case actionTypes.FETCH_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.ADD_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.ADD_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: [...state.companies, action.payload]
      }
    case actionTypes.ADD_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.EDIT_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.EDIT_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: state.companies.map((company) =>
          company.id === action.payload.id ? action.payload : company
        )
      }
    case actionTypes.EDIT_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.DELETE_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: state.companies.filter(
          (company) => company.id !== action.payload
        )
      }
    case actionTypes.DELETE_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default companyReducer
