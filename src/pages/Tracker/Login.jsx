import { useDispatch } from "react-redux"
import { AuthForm } from "../../components"
import { login } from "../../redux/tracker/authSlice"

const Login = () => {
  const dispatch = useDispatch()
  const initialValues = {
    email: "",
    password: "",
  }
  const handleSubmit = (values, options) => {
    dispatch(login(values))
    options.resetForm()
  }
  return (
    <div>
      <AuthForm isLogin onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  )
}

export default Login
