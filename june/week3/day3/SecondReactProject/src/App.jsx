import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
  let arr=[3,5,3,6,8,3,5];
  let obj={
    name:'sagar',
    age:64
  }
function App() {

  // let arr=[3,5,3,6,8,3,5];

  return (
    <>
     <h1>hello React</h1>
     <Home arr={arr} pro={obj}/>
    </>
  )
}

export default App
