import { Field, Form, Formik } from "formik"
import { Button } from "../Button"

export const SearchBar = ({ searchValue }) => {
  const initialValues = {
    searchValue,
  }

  const handleSubmit = () => {}
  return (
    <div>
      <Formik initialValues={initialValues}>
        <Form onSubmit={handleSubmit}>
          <Field placeholder='search...' name='searchValue' />
          <Button>Search</Button>
        </Form>
      </Formik>
    </div>
  )
}
