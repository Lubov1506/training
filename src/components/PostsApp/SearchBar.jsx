import { Field, Form, Formik } from "formik"
import { Button } from "../Button"

export const SearchBar = ({ setQuery }) => {
  const handleSubmit = (values) => {
    console.log('here', values.query);
    
    setQuery(values.query)
  }
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={{ query: "" }}>
        <Form className="flex gap-2 justify-center items-center">
          <Field placeholder='search...' name='query' className='text-2xl p-3 outline-none hover:shadow-sm focus:shadow-md transition-[all,0.2s,ease-in]' />
          <Button type='submit'>Search</Button>
        </Form>
      </Formik>
    </div>
  )
}
