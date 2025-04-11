import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [incomtax, setIncomtax] = useState(20000)
  const divref = useRef()

  useEffect(() => {
    setTimeout(() => {
      console.log(divref.current);
      divref.current.innerHTML = 10
    }, 5000)
  
    
  }, [])
  
  return (
    <div>
      hi there, <div ref={divref}>{incomtax}</div>
    </div>
  )
}

export default App