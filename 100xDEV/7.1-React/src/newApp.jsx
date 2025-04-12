import {useContext, useState} from 'react'
import CountContext from './context'

const newApp = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count/>
      </CountContext.Provider>
    </div>
  )
}


function Count() {
  return(
    <div>
      <CountRender/>
      <Buttons/>
    </div>
  )
}

function CountRender() {
  const {count} = useContext(CountContext)
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

function Buttons() {
  const { setCount } = useContext(CountContext)
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
export default newApp