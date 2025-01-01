import './App.css'
import { useRecoilState, useRecoilValue , RecoilRoot, useSetRecoilState} from 'recoil'
import { countAtom } from './store/atoms/count'
import {evenSelector} from './store/atoms/Selector'

function App() {
   return (
    <>
    {/* Need to wrap inside RecoilRoot */}
     <RecoilRoot>
     <Count/>
     </RecoilRoot>
    </>
  )
}

function Count(){
  //This only render once not on every button click 
 return <div>
  <CountRenderer/>
   <Buttons/> 
 </div>
}

function CountRenderer(){
// useRecoilValue is used when we just need value not need to update it 
const count=useRecoilValue(countAtom)
  return <div>
    {count}
    <EventCountRenderer/>
  </div>
}

function EventCountRenderer(){
const isEven=useRecoilValue(evenSelector)
 return <div>
  {(isEven %2==0) ? "It is even" : null}
 </div>
}
function Buttons(){
// useRecoilState is used when we need both value and update it  
// const [count,setCount]=useRecoilState(countAtom)

// Hence button also does not need count it only update it 
// This make button component also not re-render every time btn clicks

const setCount= useSetRecoilState(countAtom)
return <div>
  <button onClick={ ()=>{
  setCount(count => count+1)
  }}>Increase</button>

<button onClick={ ()=>{
setCount(count => count-1)
}}>Decrease</button>
</div>
}

export default App