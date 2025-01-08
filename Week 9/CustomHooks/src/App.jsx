import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useIsOnline } from './hooks/useIsOnline';
import { useMousePoiner } from './hooks/useMousePointer';
import { useDimensions } from './hooks/useDimensions';
import { useInterval } from './hooks/useInterval';

function useTodos(n){
  const [todos, setTodos] = useState([])
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    let interval;
    const fetchtodos=() =>{
       axios.get("https://www.random.org/integers/?num=4&min=100&max=1000&col=1&base=10&format=plain")
      .then(res=>{
        const data=res.data.trim().split("\n").map(Number);
         setTodos([...data])
        setLoading(false);
      })
      .catch((err) => console.error(err));
    };

   fetchtodos();
    interval=setInterval(() => {
    fetchtodos();
   }, n *1000);
    
   return () =>{
    clearInterval(interval);
   }
  },[n])
  return {todos,loading};
}

function App() {
const {todos,loading }=useTodos(5 );
  if(loading){
    return <div>
      Loading ...
    </div>
  }
  return (
    <>
    <Track todos={todos}/> <br /><br />
    <IsOnline/> <br />
    <MousePointer/><br />
    <Dimensions/><br />
    <Interval/><br />
    </>
  )
}

function Track({todos}){
  return (
  <div>
   {todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
  </div>
  );
}

function IsOnline(){
  const isOnline=useIsOnline();
  if(isOnline){
    return "You are online"
  }
  return "You are offline , please connect to the internet"
}

function MousePointer(){
  const mousePointer=useMousePoiner();
  return <div>
    your mouse pointer is {mousePointer.x} {mousePointer.y}
  </div>
}
function Dimensions(){
  const {height,width}=useDimensions();
  return <div>
    Height:{height} Width:{width}
  </div>
}

function Interval(){
const [count,setCount]=useState(0);
useInterval(()=>{
  setCount( c => c+1);
},1000)
return (
  <>
  Timer is at {count}
  </>
)
}

export default App
