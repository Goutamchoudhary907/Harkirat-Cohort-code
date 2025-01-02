import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='flex justify-between' >
       <div style={{backgroundColor:"red"}}>HI</div>
       <div style={{backgroundColor:"blue"}}>HI</div>
        <div style={{backgroundColor:"green"}}>HI</div>
      </div>

      <div className='grid grid-cols-3'>
    <div className='bg-red-500'>Hi</div>
    <div className='bg-yellow-500'>Hi</div>
    <div className='bg-green-500'>Hi</div>
      </div>

{/* 40% ,40%,20% */}
      {/* <div className='grid grid-cols-10'>
    <div className='bg-blue-500 col-span-4'>Hi</div>       
    <div className='bg-slate-500 col-span-4'>Hi</div>
    <div className='bg-orange-500 col-span-2'>Hi</div>
      </div>  */}

{/* on small screen below md color is red when size is above md color is blue */}
      <div className='bg-red-500 md:bg-blue-500'>Hi There</div>


      <div className='grid grid-cols-1 md:grid-cols-3 '>
    <div className='bg-red-500'>Hi</div>
    <div className='bg-yellow-500'>Hi</div>
    <div className='bg-green-500'>Hi</div>
      </div>
    </>
  )
}

export default App
