import { Route, Routes } from 'react-router-dom'
import Home from './app/Home'
import Dashboard from './app/Dashboard'
import Help from './app/Help'
import NoMatch from './app/NoMatch'


import './index.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
