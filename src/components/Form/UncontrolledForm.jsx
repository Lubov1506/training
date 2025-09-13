import { Button } from "../Button"
import { FormInput } from "./FormInput"

export const UncontrolledForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.elements.name.value
    const email = form.elements.email.value
    const password = form.elements.password.value
    console.log(name, email, password)
    form.reset()
  }
  return (
    <div className='grid place-content-center h-[100vh] gap-2 '>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 shadow p-4'>
        <FormInput name='name' placeholder='Enter name' id='nameId' />
        <FormInput name='email' placeholder='Enter email' id='emailId' />
        <FormInput
          name='password'
          placeholder='Enter password'
          id='passwordId'
        />
        <Button cn='text-sm'>Submit</Button>
      </form>
    </div>
  )
}
