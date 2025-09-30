import { Field, Form, Formik } from "formik"
import { Button } from "../Button"
import { InputField } from "./InputField"
import { OtherInput } from "./OtherInput"
import { petFormSchema } from "../../helpers/validationSchemas/validationSchemas"
import { serviceOptions } from "../../assets/constants/petFormOption"

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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={petFormSchema}
      >
        <Form className='grid grid-cols-[repeat(2,1fr)] items-center justify-center gap-2 p-2 border'>
          <InputField name='name' placeholder='name' label='Animal name' />
          <InputField name='owner' placeholder='owner' label='Animal owner' />
          <InputField name='email' placeholder='email' label='Email' />
          <InputField
            name='age'
            placeholder='age'
            label='Animal age'
            type='number'
          />

          <OtherInput name='service' type='select' options={serviceOptions} />
          <OtherInput
            name='otherservice'
            type='textarea'
            placeholder='Write the description'
          />
          <div className='flex gap-8'>
            <label>
              <Field type='radio' name='gender' value='Male' />
              Male
            </label>
            <label>
              <Field type='radio' name='gender' value='Female' />
              Female
            </label>
          </div>
          <Button cn='w-fit ' type='submit'>
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  )
}
