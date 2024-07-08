import { ICompany } from '../../types/types'
import { ApiRoute } from '../ApiRoute'
import { instance } from '../axios.api'

export const companyService = {
  async getAllByUser(): Promise<ICompany[] | undefined> {
    const { data } = await instance.get<ICompany[]>(ApiRoute.COMPANIES)
    return data
  },

  async getAll(): Promise<ICompany[] | undefined> {
    const { data } = await instance.get<ICompany[]>(ApiRoute.COMPANIES_ALL)
    return data
  },

  async getOneById(companyId: number): Promise<ICompany | undefined> {
    const { data } = await instance.get<ICompany>(
      `${ApiRoute.COMPANIES}/${companyId}`
    )
    return data
  },

  async addCompany(company: ICompany): Promise<ICompany | undefined> {
    const { data } = await instance.post<ICompany>(ApiRoute.COMPANIES, company)
    return data
  },

  async editCompany(
    editedCompany: ICompany,
    companyId: number
  ): Promise<ICompany | undefined> {
    const { data } = await instance.patch<ICompany>(
      `${ApiRoute.COMPANIES}/${companyId}`,
      editedCompany
    )
    return data
  },

  async deleteCompany(companyId: number): Promise<void> {
    await instance.delete(`${ApiRoute.COMPANIES}/${companyId}`)
  }
}
