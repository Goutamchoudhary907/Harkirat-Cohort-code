import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App(){
  const [selectedId, setSelectedId]=useState(1)

  return <div>
    <button onClick={function(){
      setSelectedId(1)
    }}>1</button>

    
<button onClick={function(){
      setSelectedId(2)
    }}>2</button>

    
<button onClick={function(){
      setSelectedId(3)
    }}>3</button>
    <Todo id={selectedId}/>
  </div>
}


function Todo({id}) {
  const [todos,setTodo]=useState({});

  useEffect(()=> {
    axios.get(`https://dummyjson.com/todos/${id}`)
.then(res => {
  console.log(res);
  setTodo(res.data)
})
}, [id])

return <div>
  ID:{id}
  <h1>
    {todos.todo}
  </h1>
  <p>Completed: {todos.completed ? 'Yes' :'NO'}</p>
</div>
}
export default App
