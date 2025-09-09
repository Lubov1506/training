const Feedback = ({ state: { good, neutral, bad } }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

export default Feedback

/* function App() {
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
} */