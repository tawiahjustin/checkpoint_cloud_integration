// import map libraries and external libraries
import React from 'react'
// use of external libraries
import Map, { NavigationControl } from 'react-map-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import maplibregl from 'maplibre-gl'
import '../App.css'
import image from '../gomycode.jpeg'

const MapContainer = () => {
  return (
    <div className='container'>
      <Map
        mapLib={maplibregl}
        // long et latitude de Paris lol
        initialViewState={{
          longitude: 2.2945,
          latitude: 48.8584,
          zoom: 14,
        }}
        style={{ width: '50%', height: ' calc(70vh - 5px)' }}
        mapStyle='https://api.maptiler.com/maps/streets/style.json?key=BroSSlDl7TMpDt7xRzkw'
      >
        <NavigationControl position='top-left' />
      </Map>
      <div>
        <h2>Welcome to Our New Gomycode Location!</h2>
        <p>Come visit us at our new address.</p>
        <p>123 Main Street, Paris, France</p>
        <div className='image-box'>
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default MapContainer
