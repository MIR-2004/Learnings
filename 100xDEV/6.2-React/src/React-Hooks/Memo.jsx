import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [counter, setCounter] = useState(0)
    const [inputvalue, setInputvalue] = useState(1)

    let count = useMemo(() => {
        let finalcounter = 0;
        for (let i = 1; i <= inputvalue; i++) {
            finalcounter = finalcounter + i ;
        }
        return finalcounter
    }, [inputvalue])

  return (
    <div>
        <input onChange={(e) => {
            setInputvalue(e.target.value)
        }} />
        <br />
            <h1>the sum of 1 to {inputvalue} is {count}</h1>
        <br />
        <button onClick={setCounter(counter+1)}> Click Me {counter}</button>
        
    </div>
  )
}

export default Memo