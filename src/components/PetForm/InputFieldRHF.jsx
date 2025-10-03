export const InputFieldRHF = ({ name, placeholder, register, errors }) => {
  return (
    <label className='relative'>
      <span>{name}</span>
      <input
        {...register(name)}
        type='text'
        placeholder={placeholder}
        className='py-1 px-2 outline-none'
      />
      {errors[name] && (
        <span className='absolute bottom-[-10px] left-1 text-[8px] text-red-300'>
          {errors[name].message}
        </span>
      )}
    </label>
  )
}
