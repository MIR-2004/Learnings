import {useContext, useState} from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';


const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}


function Count() {
  return(
    <div>
      <CountRender/>
      <Buttons/>
      <EvenCountRender/>
    </div>
  )
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

function EvenCountRender() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even": null}
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
export default App