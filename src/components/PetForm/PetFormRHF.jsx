import { useForm } from "react-hook-form"
import { InputFieldRHF } from "./InputFieldRHF"

export const PetFormRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = data=>console.log(data);
  
  return (
    <div className='grid place-content-center h-[100vh]'>
      <form className='w-[350px]' onSubmit={handleSubmit(onSubmit)}>
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
        />{" "}
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
        <div>
          <label>
            <input type='radio' name='gender' value='Male' />
            Male
          </label>
          <label>
            <input type='radio' name='gender' value='Female' />
            Female
          </label>
        </div>
      </form>
    </div>
  )
}
