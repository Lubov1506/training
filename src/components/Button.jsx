import clsx from "clsx"
import React from "react"

export const Button = ({
  children,
  onClick,
  cn,
  cnButton,
  disabled = false,
  type = "button",
  size = "md",
}) => {
  const sizeStyle = {
    xl: "px-2.5 py-1 rounded-md text-4xl border-[1.5px]",
    md: "px-1.5 py-1 rounded-sm text-2xl border-[1px]",
    sm: "px-1 py-0.5 rounded-xs text-md border-[0.5px]"
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "w-fit text-gray-900 cursor-pointer transition-[all 0.5s ease-in-out] bg-white  hover:bg-gray-700 hover:text-white font-semibold",
        disabled && "opacity-50",
        sizeStyle[size],
        cnButton
      )}
    >
      <span className={clsx("text-2xl", cn)}>{children}</span>
    </button>
  )
}
