import iconKeys from './_iconKeys'
import ErrorIcon from './ErrorIcon'
import InfoIcon from './InfoIcon'
import SuccessIcon from './SuccessIcon'
import WarningIcon from './WarningIcon'

const iconMap = {
  [iconKeys.ERROR]: <ErrorIcon />,
  [iconKeys.INFO]: <InfoIcon />,
  [iconKeys.SUCCESS]: <SuccessIcon />,
  [iconKeys.WARNING]: <WarningIcon />
}

export default iconMap
