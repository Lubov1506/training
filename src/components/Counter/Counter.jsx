import { useCount } from "../../store/use-counter-store"
import ButtonsContainer from "./ButtonsContainer"

const Counter = () => {
  const count = useCount()
  return (
    <div className='flex gap-2 flex-col text-2xl justify-center items-center'>
      <p>Counter</p>
      {count}
      <ButtonsContainer />
    </div>
  )
}

export default Counter
