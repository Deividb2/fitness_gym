import React from 'react'
import './index.css'
import Home from './pages/Home/Home'
import Servicos from './pages/Servicos/Servicos'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Routes>
        <Route path='/servicos' element={<Servicos />} />
      </Routes>

    </Router>
  )
}