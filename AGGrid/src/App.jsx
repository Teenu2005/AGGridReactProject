import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DynamicGrid from './Components/SubGrid/DynamicGrid'
import AGGrid from './Components/AGGrid'
import TreeData from './Components/TreeGrid/TreeGrid';
import CharGrid from './Components/ChartGrid/CharGrid';
import ServerDataGrid from './Components/ServerSideDataSource/ServerSideGrid';
import './App.css'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/grid" element={<AGGrid />} />
      <Route path="/" element={<DynamicGrid />} />
      <Route path="/chart" element={<CharGrid />} />
      <Route path="/tree" element={<TreeData />} />
      <Route path="/serverSide" element={<ServerDataGrid />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
