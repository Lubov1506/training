import { Navigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/tracker/authSlice"

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const location = useLocation()

  return isLoggedIn ? children : <Navigate to='/login' state={location} />
}
