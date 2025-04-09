import React from 'react'

const Wrapper = () => {
  return (
    <div>
        <CardWrapper innerComponent={<TextComponent/>} />
        <CardWrapper innerComponent={<TextComponent2/>} />
    </div>
  )
}

function CardWrapper({innerComponent}){
    return <div style={{border: "2px solid red", padding: "10px"}}>
        {innerComponent}
    </div>
}

function TextComponent(){
    return <div>
        hi there
    </div>
}

function TextComponent2(){
    return <div>
        hi there22222
    </div>
}
export default Wrapper