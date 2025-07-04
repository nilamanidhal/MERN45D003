import { createContext, useState } from 'react'
import './App.css'
import ChildOne from './components/ChildOne'


let nameContext=createContext();

// let a=20;
function App() {

  return (
    <>
     <h1>Rainy Day</h1>
     <nameContext.Provider value={"abc"}>
      <ChildOne/>
     </nameContext.Provider>
  

    </>
  )
}
export{nameContext}
export default App
