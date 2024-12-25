import React,{ useState } from 'react'
import './App.css'

function App() {
 
  
  return (
    <div>
     <HeaderWithButton/>
      <Header title="Goutam2"></Header>
      <Header title="Goutam3"></Header>
      <Header title="Goutam4"></Header>
      <Header2 title="Goutam5"></Header2>
    </div>
  )
}

function HeaderWithButton(){
  // keep the state below reduce number of re renders
  const [title, setTitle] = useState("My name is Goutam")

  function updateTitle(){
    setTitle("My name is "+Math.random())
   }
   return <div>
 <button onClick={updateTitle}>Update the title</button>
 <Header title={title}></Header>
   </div>
}

function Header({title}){
 return <div>
  {title}
 </div>
}

// React.memo lets you skip re rendering if props are unchanged
const Header2=React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})
export default App
