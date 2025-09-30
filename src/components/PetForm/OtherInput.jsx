import { ErrorMessage, Field } from "formik"
import { toCapitalize } from "../../helpers"

export const OtherInput = ({
  type,
  placeholder = "Choose option",
  name,
  options,
}) => {
  return (
    <label className='flex flex-col gap-1 relative '>
      <span>{toCapitalize(name)}</span>
      {type === "select" && (
        <>
          <Field
            as={type}
            placeholder={placeholder || name}
            className='p-1 outline-none'
            min={0}
            name={name}
          >
            <option value=''>{placeholder}</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name={name}
            component='span'
            className='text-red-400 absolute bottom-[-4px] left-1 text-[0.6rem]'
          />
        </>
      )}
      {type === "textarea" && (
        <Field
          as={type}
          placeholder={placeholder}
          className='p-1 outline-none'
          name={name}
        />
      )}
    </label>
  )
}
