import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Count count={count} setCount={setCount}/>
    </>
  )
}

function Count({count,setCount}){
  // Here there is no need of count variable it only used by countRenderer and buttons componenet but not by count function 
  // it is called prop drilling count function pass count to both componenets 
  // context api avoid this by directly pass props to child componenets
 return <div>
  <CountRenderer count={count}/>
   <Buttons count={count} setCount={setCount}/> 
 </div>
}

function CountRenderer({count}){
  return <div>
    {count}
  </div>
}

function Buttons({count,setCount}){
return <div>
  <button onClick={ ()=>{
  setCount(count+1)
  }}>Increase</button>

<button onClick={ ()=>{
setCount(count-1)
}}>Decrease</button>
</div>
}

export default App