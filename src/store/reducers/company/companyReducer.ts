import { ICompany } from '../../../types/types'
import {
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILURE,
  ADD_COMPANY_FAILURE,
  ADD_COMPANY_REQUEST,
  ADD_COMPANY_SUCCESS,
  FETCH_COMPANY_REQUEST,
  EDIT_COMPANY_FAILURE,
  EDIT_COMPANY_REQUEST,
  EDIT_COMPANY_SUCCESS,
  FETCH_COMPANY_FAILURE,
  FETCH_COMPANY_SUCCESS,
  DELETE_COMPANY_FAILURE,
  DELETE_COMPANY_REQUEST,
  DELETE_COMPANY_SUCCESS,
  ALL_COMPANIES_FAILURE,
  ALL_COMPANIES_REQUEST,
  ALL_COMPANIES_SUCCESS
} from '../../actions/company/actionTypes'

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const companyReducer = (state = initialState, action: any): CompanyState => {
  switch (action.type) {
    case FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        companies: action.payload
      }
    case FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload
      }
    case FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ALL_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        companies: action.payload
      }
    case ALL_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload
      }
    case ALL_COMPANIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FETCH_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        company: null
      }
    case FETCH_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        company: action.payload
      }
    case FETCH_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ADD_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ADD_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: [...state.companies, action.payload]
      }
    case ADD_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case EDIT_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case EDIT_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: state.companies.map((company) =>
          company.id === action.payload.id ? action.payload : company
        )
      }
    case EDIT_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case DELETE_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: state.companies.filter(
          (company) => company.id !== action.payload
        )
      }
    case DELETE_COMPANY_FAILURE:
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
