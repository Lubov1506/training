import { useState } from "react"
import Description from "./Description"
import Options from "./Options"
import Notification from "./Notification"
import Feedback from "./Feedback"

function FeedBackApp() {
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

export default FeedBackApp
