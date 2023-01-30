import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statitics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad
  const averageFeedback = (good - bad) / totalFeedback
  const positivePercentage = (good / totalFeedback) * 100

  return (
    <div>
      <h1>Statitics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedback : {totalFeedback}</p>
      <p>average Feedback : {averageFeedback}</p>
      <p>Positive Feedback : {positivePercentage}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = (props) => {
    setGood(good + 1)
  }

  const handleNeutral = (props) => {
    setNeutral(neutral + 1)
  }

  const handleBad = (props) => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      {good + neutral + bad > 0 ? (
        <Statitics good={good} neutral={neutral} bad={bad} />
      ) : (
        <h1>no feedback given</h1>
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))