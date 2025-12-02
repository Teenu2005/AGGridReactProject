import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DynamicGrid from './Components/SubGrid/DynamicGrid'
import AGGrid from './Components/AGGrid'
import './App.css'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/dynamic-grid" element={<DynamicGrid />} />
      <Route path="/" element={<AGGrid />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
