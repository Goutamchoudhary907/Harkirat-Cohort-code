
import './App.css'
import { RecoilRoot, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atom';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  //  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  // useRecoilValueLoadable is used to show loading and errors while fetching data from backend 
   const todo=useRecoilValueLoadable(todosAtomFamily(id));

   if(todo.state === 'loading'){
    return <div>
      Loading...
      </div>
   } else if(todo.state === 'hasValue'){

    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )

   }else if(todo.state === 'hasError'){
     return <div>
       Error
     </div>
   }
}

export default App