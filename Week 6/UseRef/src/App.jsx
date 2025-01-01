import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [incomeTax, setIncomeTax] = useState(2000)

  // useRef give reference of a element 
  const divRef= useRef()

  useEffect(() =>{
    setTimeout(() => {
      divRef.current.innerHTML=10
    }, 5000);
  },[])
  return (
    <div>
      Hi there , your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App
