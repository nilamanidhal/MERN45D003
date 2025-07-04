import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/home'
import About from './components/About'
import Service from './components/Service'
import Navbar from './components/Navbar'


Service

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello</h1>
<Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/:id' element={<FetchId/>}></Route>
     </Routes>
    </>

    
  )
}

export default App
