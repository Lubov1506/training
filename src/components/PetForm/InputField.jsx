import { ErrorMessage, Field } from "formik"

export const InputField = ({ name, placeholder, label, type = "text" }) => {
  return (
    <label className='flex flex-col gap-1 relative '>
      <span>{label}</span>
      <Field
        type={type}
        placeholder={placeholder}
        className='p-1 outline-none'
        name={name}
      />
      <ErrorMessage name={name} component='span' className="text-red-400 absolute bottom-[-4px] left-1 text-[0.6rem]"/>
    </label>
  )
}
