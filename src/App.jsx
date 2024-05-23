import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Bbout from './pages/Bbout'
import DignIn from './pages/DignIn'
import DignUp from './pages/DignUp'
import Crofile from './pages/Crofile'













export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Bbout />} />
      <Route path='/sign-in' element={<DignIn />} />
      <Route path='/sign-up' element={<DignUp />} />
      <Route path='/profile' element={<Crofile />} />
      
      
    </Routes>
    </BrowserRouter>
  )
}
