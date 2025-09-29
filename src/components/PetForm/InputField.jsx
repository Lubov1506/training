import { Field } from "formik"

export const InputField = ({ name, placeholder, label, type = "text" }) => {
  return (
    <label className='flex flex-col gap-1 '>
      <span>{label}</span>
      <Field
        type={type}
        placeholder={placeholder}
        className='p-1 outline-none'
        name={name}
      />
    </label>
  )
}
