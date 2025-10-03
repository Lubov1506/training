import { Field, Form, Formik } from "formik"
import { Button } from "../Button"

export const SearchBar = ({ query, setQuery }) => {

  return (
    <div>
      <label>
        <input
          className='p-2 shadow-xs hover:shadow-sm focus:shadow-md outline-none'
          type='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      {/* <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field placeholder='search...' name='query' />
          <Button type='submit'>Search</Button>
        </Form>
      </Formik> */}
    </div>
  )
}
