export const InputFieldRHF = ({ name, placeholder, register }) => {
  return (
    <label>
      <span>{name}</span>
      <input {...register(name)} type='text' placeholder={placeholder} />
    </label>
  )
}
