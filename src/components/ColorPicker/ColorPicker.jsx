import { useEffect, useState } from "react"
import colors from "../../assets/colors.json"
import clsx from "clsx"
const ColorPicker = () => {
  const [color, setColor] = useState(() => {
    const savedColor = window.localStorage.getItem("colorPicker")
    if (savedColor !== null) {
      return JSON.parse(savedColor)
    }
    return colors[0].color
  })

  useEffect(() => {
    window.localStorage.setItem("colorPicker", JSON.stringify(color))
  }, [color])

  return (
    <section
      style={{ backgroundColor: color }}
      className='flex fixed top-0 left-0 bottom-0 right-0 items-center justify-center transition-all '
    >
      <div className='flex items-center justify-center flex-col gap-2'>
        <h2 className='font-bold'>
          Current color: <span>{color}</span>
        </h2>
        <ul className='flex gap-2 flex-wrap items-center justify-center'>
          {colors.map((item) => (
            <li
              key={item.id}
              style={{ backgroundColor: item.color }}
              className={clsx(`border-2 rounded-sm p-1 bg-[${color}]`)}
              onClick={() => setColor(item.color)}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ColorPicker
