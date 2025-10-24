import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"

const AuthForm = ({ isLogin = true, initialValues, onSubmit }) => {
  return (
    <div className='hero bg-base-200 min-h-screen '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>
            {isLogin ? "Login now!" : "Register"}
          </h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <div className='card-body'>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
            >
              <Form className='fieldset flex flex-col gap-4'>
                {!isLogin && (
                  <label className='label flex flex-col gap-2 items-start'>
                    Name
                    <Field
                      type='text'
                      name='name'
                      className='input'
                      placeholder='Name'
                    />
                  </label>
                )}
                <label className='label flex flex-col gap-2 items-start'>
                  Email
                  <Field
                    type='email'
                    name='email'
                    className='input'
                    placeholder='Email'
                  />
                </label>
                <label className='label flex flex-col gap-2 items-start'>
                  Password
                  <Field
                    type='password'
                    name='password'
                    className='input'
                    placeholder='Password'
                  />
                </label>
                <div>
                  <Link
                    to={isLogin ? "/register" : "/login"}
                    className='hover:underline hover:text-teal-100 transition-all duration-200 ease-in'
                  >
                    {isLogin
                      ? "Don't you have an account? Register now!"
                      : "Have you already have an account? Login!"}
                  </Link>
                </div>
                <button className='btn btn-neutral mt-4' type='submit'>
                  {isLogin ? "Login" : "Register"}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
