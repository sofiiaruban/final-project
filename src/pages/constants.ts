export enum AuthOption {
  SIGNIN = 'signIn',
  SIGNUP = 'signUp'
}

export const authOptions = [
  { value: AuthOption.SIGNIN, label: 'Sign In' },
  { value: AuthOption.SIGNUP, label: 'Sign Up' }
]
