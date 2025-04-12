import {useContext, useState} from 'react'
import CountContext from './context'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}


function Count({ setCount }) {
  return(
    <div>
      <CountRender/>
      <Buttons setCount={setCount} />
    </div>
  )
}

function CountRender() {
  const count = useContext(CountContext)
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

function Buttons({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
export default App