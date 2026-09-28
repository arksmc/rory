import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Memories from './pages/Memories'
import Letters from './pages/Letters'
import Acads from './pages/Acads'
import About from './pages/About'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/acads" element={<Acads />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App