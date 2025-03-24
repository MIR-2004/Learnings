import React, { useState } from 'react'

const App = () => {

 const [counter, setCounter] = useState(0)

 const add = ()  => {
  setCounter(counter + 1)
 }

 const remove = () => {
  setCounter(counter -1)
 }

  return (
  <div>
    <h1>chai aur react</h1>
    <h2>Counter : {counter}</h2>
    <button onClick={add}> + </button>
    <button onClick={remove}> - </button>
    </div>
  )
}



export default App