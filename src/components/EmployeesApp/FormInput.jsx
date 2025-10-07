import clsx from "clsx"

export const FormInput = ({
  id,
  name,
  type = "text",
  placeholder = "Enter...",
  labelCN = "",
  inputCN,
  spanCN,
  onChange,
  value,
  checked
}) => {
  return (
    <>
      {type === "radio" ?(
        <label htmlFor={id} className={clsx("flex gap-2", labelCN)}>
          <span className={clsx("", spanCN)}>{value}</span>
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            className={clsx(
              "border-b border-teal-800/25 hover:border-teal-800/80 focus:border-teal-900/100 outline-none transition",
              inputCN
            )}      checked={checked}
          />
        </label>
      ):
      (
        <label htmlFor={id} className={clsx("flex gap-2", labelCN)}>
          <span className={clsx("", spanCN)}>{name}</span>
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            className={clsx(
              "border-b border-teal-800/25 hover:border-teal-800/80 focus:border-teal-900/100 outline-none transition",
              inputCN
            )}
       
          />
        </label>
      )
      }
 
    </>
  )
}
