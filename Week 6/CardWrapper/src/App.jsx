import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      {/* Use CardWrapper as a wrapper  */}
      <CardWrapper>
        Hi there
      </CardWrapper>
      <CardWrapper>
        Hello There
      </CardWrapper>
    </div>
  )

  function CardWrapper({children}){
    // Ḥere in children has all info 
    console.log(children);
    
   return <div style={{border:"2px solid black", padding:20}}>
  {children}
   </div>
  }
}

export default App
