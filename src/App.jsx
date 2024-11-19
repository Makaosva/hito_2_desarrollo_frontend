import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import InicioSesion from './views/InicioSesion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<InicioSesion />}/>
        <Route path="/registro" element={<Registro />}/>
      </Routes>
    </div>
  )
}

export default App
