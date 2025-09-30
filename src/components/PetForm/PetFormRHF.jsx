import { useForm } from "react-hook-form"
import { InputFieldRHF } from "./InputFieldRHF"
import { yupResolver } from "@hookform/resolvers/yup"
import { petFormRHFSchema } from "../../helpers/validationSchemas/validationSchemas"
import { Button } from "../Button"

export const PetFormRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(petFormRHFSchema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <div className='grid place-content-center h-[100vh]'>
      <form
        className='w-[350px] flex flex-col gap-2'
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputFieldRHF
          register={register}
          name='name'
          placeholder='Type name'
          errors={errors}
        />
        <InputFieldRHF
          register={register}
          name='owner'
          placeholder='Type owner'
          errors={errors}
        />
        <InputFieldRHF
          register={register}
          name='email'
          placeholder='Type email'
          errors={errors}
        />
        <InputFieldRHF
          register={register}
          name='phone'
          placeholder='Type phone'
          errors={errors}
        />
        <InputFieldRHF
          register={register}
          name='age'
          placeholder='Type age'
          errors={errors}
        />
        <div className='relative mb-3'>
          <label>
            <input {...register('gender')} type='radio' name='gender' value='Male' />
            Male
          </label>
          <label>
            <input {...register('gender')} type='radio' name='gender' value='Female' />
            Female
          </label>
          {errors.gender && (
            <span className='absolute bottom-[-10px] left-1 text-[8px] text-red-300'>
              {errors.gender.message}
            </span>
          )}
        </div>
        <Button type='submit'>Send</Button>
      </form>
    </div>
  )
}
