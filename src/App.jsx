import { useState } from "react"
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Notification from "./components/Notification/Notification"
import Options from "./components/Options/Options"

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad

  const handleClickFeedback = (option) => {
    setFeedback((prev) => ({ ...prev, [option]: prev[option] + 1 }))
  }
  return (
    <div className='flex flex-col justify-center items-center m-2 '>
      <Description />
      <Options state={feedback} onClick={handleClickFeedback} />
      {!totalFeedback && <Notification />}
      {!!totalFeedback && <Feedback state={feedback} />}
    </div>
  )
}

export default App
