import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pcard from './components/Pcard'


let Product={
  imgLink:"https://m.media-amazon.com/images/I/51ZR4lyxBHL._AC_SX466_.jpg",
  name:"BOSE QuietComfort Ultra Bluetooth Headphones",
  price:"24,677",
  discount:25,
  rating:4.2,
  summary:"High-quality sound with spatial audio, noise cancelling, comfortable fit, long battery life and Touch controls on each earcup allow you to change volume, skip tracks, answer calls and change modes",
}
function App() {

  return (
    <>
     <Pcard product={Product}/>
    </>
  )
}

export default App
