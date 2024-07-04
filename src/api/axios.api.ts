import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/getTokenFromLocalStorage'

export const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: 'Bearer ' + getTokenFromLocalStorage() || ''
  }
})
