export enum AuthOption {
  SIGNIN = 'signIn',
  SIGNUP = 'signUp'
}

export const authOptions = [
  { value: AuthOption.SIGNIN, label: 'Sign In' },
  { value: AuthOption.SIGNUP, label: 'Sign Up' }
]

export const usersTableHeadings: string[] = [
  'Id',
  'First Name',
  'Last Name',
  'Nickname',
  'Phone Number',
  'Position',
  'Role',
  'Description'
]

export const companiesTableHeadings: string[] = [
  'Id',
  'Name',
  'Service',
  'Actions'
]
