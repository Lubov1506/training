import clsx from "clsx"

export const InputField = ({
  type = "text",
  name,
  placeholder,
  register,
  errors,
  labelClass,
}) => {
  return (
    <label className={clsx("relative", labelClass)}>
      <input
        className='p-1 px-2 size-auto shadow-xs outline-none hover:shadow-sm focus:shadow-md transition-[all,0.2s,ease-in]'
        type={type}
        placeholder={placeholder}
        name={name}
        {...register(name)}
      />
      {errors[name] && (
        <span className='absolute bottom-[-10px] left-1 text-red-900 text-[8px]'>
          {errors[name].message}
        </span>
      )}
    </label>
  )
}
