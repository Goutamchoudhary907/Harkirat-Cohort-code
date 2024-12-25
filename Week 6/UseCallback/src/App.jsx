import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { memo } from 'react';
function App() {
  const [count, setCount] = useState(0)

// by using useCallback child not rerender every time parent render

  const inputFunction=useCallback(() =>{
    console.log("Hi there");
    
  },[])
  return <div>
    <ButtonComponent inputFunction={inputFunction}/>
    <button onClick={()=>{
      setCount(count+1);
    }}>Click me {count}</button>
  </div>
}

const ButtonComponent= memo(({inputFunction}) =>{
  console.log("Child render");
  return <div>
    <button >Button Clicked</button>
  </div>
})

export default App
