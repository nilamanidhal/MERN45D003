import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const[theme,setTheme]=useState("light");

  function handelClick(){
  setCount(count+1)
}

function handelTheme(){
  if(theme=="light"){
    setTheme=="dark";
    document.body.style.backgroundColor="black";
  }
  else{
    setTheme("light");
    document.body.style.backgroundColor="white";
  }
}
  return (
    <>
    <h1>Hello</h1>
    <h3>value is: {count}</h3>
    <button onClick={handelClick}>inc</button>
    <button onClick={handelTheme}>Theme</button>
    </>
  )
}

export default App
