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
