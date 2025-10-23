import { useDispatch } from "react-redux"
import { AuthForm } from "../../components"
import { register } from "../../redux/tracker/authSlice"

const Register = () => {
  const dispatch = useDispatch()
  const initialValues = {
    name: "",
    email: "",
    password: "",
  }
  const handleSubmit = (data, options) => {
    dispatch(register(data))
    options.resetForm()
  }
  return (
    <div>
      <AuthForm
        isLogin={false}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Register
