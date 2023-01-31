import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
      setValue(newValue)
    }

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

/* 
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root')) */