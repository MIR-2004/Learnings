import Card from '../components/Card'
import './App.css'

function App() {
  
  const obj = {
    name : 'mir',
    age: 32
  }

  return (
    <>
     
    <Card/>
    <Card data = {obj}/>
    <Card/>*
    </>
  )
}

export default App
