import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Landin = React.lazy(() => import('./component/Landin'))
const Dashboard = React.lazy(() => import('./component/dashboard'))

const App = () => {

  return (
    <BrowserRouter>
    <Appbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landin />} />
      </Routes>
    </BrowserRouter>
   
  )
}

function Appbar() {

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => {
          navigate('/')
        }}>
          Landing Page
        </button>
        <button onClick={()=> {
          navigate('/dashboard')
        }}>
          Dashboard
        </button>
      </div>
    </div>
  )
}

export default App