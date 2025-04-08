import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("mir")

  function titlechange() {
    setTitle(Math.random())
  }
  

  return (
    <div>
      <div>
      <button onClick={titlechange}>click me</button>
      <Header title={title}></Header>
      <Header title="mir-1"></Header>
      <Header title="mir-2"></Header>
      <Header title="mir-3"></Header>
      <Header title="mir-4"></Header>
      </div>
    </div>
  )
}

function Header({title}) {
  return (
    <div>
      {
        title
      }
    </div>

  )
}

export default App