export interface IUser {
  id: string
  email: string
  token: string
  role?: string
}
export interface IUserData {
  id?: number
  email?: string
  password?: string
  phoneNumber?: string
  lastName?: string
  firstName?: string
  nickname?: string
  description?: string
  position?: string
  role?: string
}
export interface IProfileData {
  phoneNumber?: string
  lastName?: string
  firstName?: string
  nickname?: string
  description?: string
  position?: string
}
export interface IResponseUser {
  email: string
  id: number
  password: string
  createdAt: string
  updatedAt: string
  role?: string
}
export interface IResponseUserData {
  token: string
  user: IResponseUser
}
export interface ICompany {
  id?: number
  name?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  employeeNumber?: number | any
  service?: string
  address?: string
  description?: string
  companyType?: string
  createdAt?: string
  updatedAt?: string
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}
