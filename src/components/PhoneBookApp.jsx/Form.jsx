import { useForm } from "react-hook-form"
import { InputField } from "./InputField"
import { yupResolver } from "@hookform/resolvers/yup"
import { phonesFormSchema } from "../../helpers/validationSchemas/phones/schemas"
import { Button } from "../Button"

export const Form = ({ setContacts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(phonesFormSchema),
  })
  const onSubmit = (data) => {
    console.log(data)

    setContacts((prev) => [...prev, data])
    reset()
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-center items-center gap-2 '
    >
      {<h2 className='text-2xl'>New contact</h2>}
      <InputField
        register={register}
        errors={errors}
        name='name'
        placeholder='Type name'
      />
      <InputField
        register={register}
        errors={errors}
        name='lastName'
        placeholder='Type last name'
      />
      <InputField
        register={register}
        errors={errors}
        name='phoneNumber'
        placeholder='Type phone number'
        labelClass='mb-2'
      />
      <Button type='submit' cn='w-fit text-sm'>
        Add contact
      </Button>
    </form>
  )
}
