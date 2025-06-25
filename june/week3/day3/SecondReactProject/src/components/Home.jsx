import React from 'react'

function Home(props) {
  return (
    <div>
      <h3>hello</h3>
    array value is: {props.arr[3]}
    <br />
    profile value: {props.pro.name}
    </div>
  )
}

export default Home
