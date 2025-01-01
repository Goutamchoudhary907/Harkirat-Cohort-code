import{BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
const Dashboard= lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

// Lazy dont load full website at once it load a page when user navigate to it 
import React from 'react'

function App() {
    
     return (
      <div>
     <BrowserRouter>
     <Appbar/>
     <Routes>
    {/* Suspense api Lets you display a fallback until its children have finished loading. */}
     <Route path="/dashboard" element={ <Suspense fallback={"loading..."}>
     <Dashboard/>
     </Suspense>}/>
     <Route path="/" element={ <Suspense fallback={"loading..."}>
      <Landing/>
      </Suspense>}/>
     </Routes>
     </BrowserRouter>
     </div>
  )
}

function Appbar(){
  const navigate=useNavigate()              // this only used inside BroswerRouter component

  return <div>

      {/* Create common top bar on every page irrespective of route */}
      {/* <div style={{background:'black', color:'white'}}>
       Hi this is top bar
      </div> */}
      <div>
        <button onClick={()=>{
          // window.location.href="/"     this reload the page every time
          navigate("/")
        }}>Landing page</button>

        <button onClick={()=>{
          // window.location.href="/dashboard"         use naviage dont reload the page and html js dont come every time from server
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
      </div>
}

export default App
