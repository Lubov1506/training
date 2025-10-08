import { Field, Form, Formik } from "formik"

export const SearchBar = ({ query, setQuery }) => {
  const handleSubmit = (values) => {
    setQuery(values.query)
  }
  return (
    <div className='flex justify-center items-center p-2'>
      <Formik initialValues={{ query }} onSubmit={handleSubmit}>
        <Form className='flex gap-2 justify-center items-center'>
          <Field placeholder='Enter to search' name='query' className='p-2' />
          <button className='btn w-fit' type='submit'>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  )
}
