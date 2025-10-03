import { Field, Form, Formik } from "formik"
import { Button } from "../Button"

export const SearchBar = ({ query, setQuery }) => {
  const initialValues = {
    query,
  }

  const handleSubmit = (data) => {
    console.log(data.query)
    if (!data.query.trim().length) return
    setQuery(data)
  }
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field placeholder='search...' name='query' />
          <Button type='submit'>Search</Button>
        </Form>
      </Formik>
    </div>
  )
}
