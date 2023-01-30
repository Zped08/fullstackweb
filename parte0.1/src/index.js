import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad
  const averageFeedback = (good - bad) / totalFeedback
  const positivePercentage = (good / totalFeedback) * 100

  if (totalFeedback === 0) {
    return <div><h1>No feedback given</h1></div>
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="total feedback" value={totalFeedback} />
          <Statistic text="Average feedback" value={averageFeedback} />
          <Statistic text="Positive feedback" value={positivePercentage} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))