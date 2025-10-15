import { Field, Form, Formik } from "formik"
import { useAuth } from "../../store/hooks"
import { Navigate, useLocation } from "react-router-dom"
import { useRef } from "react"

const Login = () => {
  const { login, isLoggedIn } = useAuth()
  const location = useLocation()
  const goBackRef = useRef(location.state) || "/"
  const initialValues = { email: "", password: "" }
  const handleSubmit = (values, options) => {
    login(values)
    options.resetForm()
  }
  if (isLoggedIn) {
    return <Navigate to={goBackRef.current} />
  }
  return (
    <div className='hero bg-gray-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className='card bg-gray-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <div className='card-body'>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className='fieldset'>
                <label className='label'>Email</label>
                <Field
                  name='email'
                  type='email'
                  className='input bg-gray-200 text-black placeholder-gray-500'
                  placeholder='Email'
                />
                <label className='label'>Password</label>
                <Field
                  name='password'
                  type='password'
                  className='input bg-gray-200 text-black placeholder-gray-500'
                  placeholder='Password'
                />
                <div>
                  <a className='link link-hover'>Forgot password?</a>
                </div>
                <button className='btn btn-neutral mt-4' type='submit'>
                  Login
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
