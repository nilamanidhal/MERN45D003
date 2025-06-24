import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Service/>
      <Contact/>
      {/* <h3>hyy react</h3> */}
    </>
  )
}

export default App
