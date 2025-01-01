import { useContext, useState } from 'react'
import {CountContext} from './components/context'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// wrap anyone that wants to use the teleported value inside a provider
  return (
    <>
    <CountContext.Provider value={{count, setCount}}>
    <Count count={count} setCount={setCount}/>
    </CountContext.Provider>
    </>
  )
}

function Count(){
 return <div>
  <CountRenderer/>
   <Buttons/> 
 </div>
}

function CountRenderer(){
// Using useContext we can use count without passing it as props 
const {count}=useContext(CountContext) 
  return <div>
    {count}
  </div>
}

function Buttons(){
 const {count,setCount}=useContext(CountContext) 
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