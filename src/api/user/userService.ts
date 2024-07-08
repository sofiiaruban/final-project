import { IUser } from '../../types/types'
import { ApiRoute } from '../ApiRoute'
import { instance } from '../axios.api'

export const UserService = {
  async getUser(): Promise<IUser | undefined> {
    const { data } = await instance.get<IUser>(ApiRoute.PROFILE)
    return data
  },

  async getProfile(userId: number): Promise<IUser | undefined> {
    const { data } = await instance.get<IUser>(`${ApiRoute.USERS}/${userId}`)
    return data
  },

  async editProfile(
    userId: number,
    editedProfile: IUser
  ): Promise<IUser | undefined> {
    const { data } = await instance.patch<IUser>(
      `${ApiRoute.USERS}/${userId}`,
      editedProfile
    )
    return data
  },

  async getAllUsers(): Promise<IUser[] | undefined> {
    const { data } = await instance.get<IUser[]>(ApiRoute.USERS)
    return data
  }
}
