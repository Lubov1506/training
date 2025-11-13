import { decrementCount, incrementCount } from "../../store/use-counter-store"

const ButtonsContainer = () => {
  return (
    <div className='flex gap-2 w-fit'>
      <button className='btn btn-accent' onClick={decrementCount()}>
        Minus
      </button>
      <button className='btn btn-accent' onClick={incrementCount()}>
        Plus
      </button>
    </div>
  )
}

export default ButtonsContainer
