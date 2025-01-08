import React,  {useEffect, useState } from 'react'
import './App.css'

function App() {
const [render,setRender]=useState(true);
// mount Unmount componenet every 5 sec
useEffect(()=>{
  setTimeout(() => {
    setRender(r => !r)
  }, 5000);
})
  return (
    <>
     {render ? <MyComponent2/> : <div></div>} 
    </>
  )
}

function MyComponent() {
  useEffect(()=>{
    console.error("Component mounted");

    // This return statement run when dependency chnaged or component unmount
    // First time only above code is run second time first this return code is run then above code is run
    return ()=>{
      console.log("Component unmounted");
    }
  },[])

  return <div>
    From inside my component
  </div>
}


// In class based componenets direct functions are available for mount and unmount
class MyComponent2 extends React.Component{
componentDidMount(){
  console.log("Component mounted");
}
componentWillUnmount(){
  console.log("unmounted");
}

render(){
  return <div>Hi there</div>
}
}
export default App
