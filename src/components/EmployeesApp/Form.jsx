import { useState } from "react"
import { Button } from "../Button"
import { FormInput } from "./FormInput"

export const Form = ({ register }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
    gender: "male",
  })
  console.log(formData, register)
  const handleChangeInput = (e) => {
    const { name, value } = e.target
    console.log(e.target.type)
    if (e.target.type === "checkbox") {
      return setFormData({ ...formData, [name]: !formData[name] })
    }
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    register(formData)
    setFormData({
      username: "",
      email: "",
      password: "",
      terms: false,
      gender: "male",
    })
  }
  return (
    <div className='grid place-content-center h-[100vh] gap-2 '>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 shadow p-4'>
        <FormInput
          name='username'
          placeholder='Enter name'
          id='nameId'
          value={formData.username}
          onChange={handleChangeInput}
        />
        <FormInput
          name='email'
          placeholder='Enter email'
          id='emailId'
          value={formData.email}
          onChange={handleChangeInput}
        />
        <FormInput
          name='password'
          placeholder='Enter password'
          id='passwordId'
          value={formData.password}
          onChange={handleChangeInput}
        />
        <div>
          <FormInput
            type='radio'
            name='gender'
            id='gender1Id'
            value='male'
            onChange={handleChangeInput}
            checked={formData.gender === "male"}
          />
          <FormInput
            type='radio'
            value='female'
            name='gender'
            id='gender2Id'
            // value={formData.gender}
            onChange={handleChangeInput}
            checked={formData.gender === "female"}
          />
        </div>
        <FormInput
          type='checkbox'
          name='terms'
          id='termsId'
          value={formData.terms}
          onChange={handleChangeInput}
        />
        <Button cn='text-sm'>Submit</Button>
      </form>
    </div>
  )
}
