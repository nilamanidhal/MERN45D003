import React, { useContext } from 'react'
import { nameContext } from '../App'


function Childthree() {
     let name=useContext(nameContext)
  return (
    <div>
       <h1>value is:{name}</h1>
     <h3>this is my child three</h3>
    </div>
  )
}

export default Childthree
