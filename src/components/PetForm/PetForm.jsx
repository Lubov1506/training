import { Field, Form, Formik } from "formik"
import { Button } from "../Button"
import { InputField } from "./InputField"

export const PetForm = () => {
  const initialValues = {
    name: "",
    owner: "",
    email: "",
    age: "",
    gender: "Male",
    service: "",
    otherservice: "",
  }
  const handleSubmit = (data, options) => {
    console.log(data)
    options.resetForm()
  }
  return (
    <div className='grid place-content-center h-[100vh] w-full'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='flex flex-col gap-2 p-2 border'>
          <InputField name='name' placeholder='name' label='Animal name' />
          <InputField name='owner' placeholder='owner' label='Animal owner' />
          <InputField name='email' placeholder='email' label='Email' />
          <InputField name='age' placeholder='age' label='Animal age' type='number'/>
          <label>
            <Field type='radio' name='gender' value='Male' />
            Male
          </label>
          <label>
            <Field type='radio' name='gender' value='Female' />
            Female
          </label>
          <label className='flex flex-col gap-1 '>
            <span>Services</span>
            <Field
              as='select'
              placeholder='age'
              className='p-1 outline-none'
              min={0}
              name='service'
            >
              <option value='Growming'>Growming</option>
              <option value='Walking'>Walking</option>
              <option value='Washing up'>Washing up</option>
              <option value='Feed up'>Feed up</option>
              <option value='Other'>Other...</option>
            </Field>
          </label>
          <label className='flex flex-col gap-1 '>
            <span>Describe the service</span>
            <Field
              as='textarea'
              placeholder='Write the description'
              className='p-1 outline-none'
              name='otherservice'
            />
          </label>
          <Button cn='w-fit' type='submit'>
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  )
}
