import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { ButtonColor } from './constants'

const GoBackButton = () => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate(-1)
  }

  return (
    <Button text="Go Back" onClick={navigateToHome} color={ButtonColor.ROSE} />
  )
}

export default GoBackButton
