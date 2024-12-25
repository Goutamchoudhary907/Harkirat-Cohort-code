import { useEffect, useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue,setInputValue]=useState(1)

  // const [finalCount,setfinalCount]=useState(0);

  let counter=useMemo(() =>{
    let finalCount=0
    for(let i=1;i<=inputValue;i++){
      finalCount=finalCount+i
    }
    return finalCount
  },[inputValue])

  // also use useEffect in place of useMemo 
  // useEffect(() =>{
  //   let finalCount=0
  //   for(let i=1;i<=inputValue;i++){
  //     finalCount=finalCount+i
  //   }
  //   setfinalCount(finalCount)
  // },[inputValue])


  return <div>
    <input onChange={function(e){
      setInputValue(e.target.value)
    }}></input> <br />
    Sum from 1 to {inputValue} is {counter} <br /> <br />
    
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
</div>
}
export default App
