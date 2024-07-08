import { IResponseUserData, IUser, IUserData } from '../../types/types'
import { ApiRoute } from '../ApiRoute'
import { instance } from '../axios.api'

export const AuthService = {
  async registration(
    userData: IUserData
  ): Promise<IResponseUserData | undefined> {
    const { data } = await instance.post<
      IUserData,
      { data: IResponseUserData }
    >(ApiRoute.USERS, userData)

    return data
  },

  async login(userData: IUserData): Promise<IUser | undefined> {
    const { data } = await instance.post<IUser>(ApiRoute.LOGIN, userData)

    return data
  }
}
