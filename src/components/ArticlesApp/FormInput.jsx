import clsx from "clsx"

export const FormInput = ({
  type = "text",
  placeholder = "Title",
  value,
  setValue = console.log("not fn"),
  cn,
}) => {
  return (
    <input
      style={{ fontSize: "26px" }}
      className={clsx("bg-white p-2 text-5xl", cn)}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
