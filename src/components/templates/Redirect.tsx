import { memo } from 'react'
import { Navigate } from 'react-router-dom'

const Redirect = memo(function _(): React.ReactElement {
  return <Navigate to='/login' replace />
})

export default Redirect
