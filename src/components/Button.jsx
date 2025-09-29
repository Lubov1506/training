import clsx from "clsx"
import React from "react"

export const Button = ({
  children,
  onClick,
  cn,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "px-2.5 py-1 rounded-sm border-[1px] text-gray-900 cursor-pointer transition-[all 0.5s ease-in-out] bg-white text-4xl hover:bg-gray-700 hover:text-white font-semibold",
        disabled && "opacity-50",
        cn
      )}
    >
      <span className={clsx("text-2xl", cn)}>{children}</span>
    </button>
  )
}
