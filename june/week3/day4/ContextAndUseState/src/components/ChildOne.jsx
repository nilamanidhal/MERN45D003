import React from 'react'
import ChildTwo from './ChildTwo'

function ChildOne() {
  return (
    <div>
      {/* ChildTwo={props.a} */}
      <h1>this my child one</h1>
      <ChildTwo/>
    </div>
  )
}

export default ChildOne
