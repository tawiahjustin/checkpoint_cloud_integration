import * as React from 'react'
import Navbar from './components/navbar.js'
import './App.css'
import MapContainer from './components/MapContainer.js'
// app component
function App() {
  return (
    <div>
      <Navbar />
      <MapContainer />
    </div>
  )
}

export default App
