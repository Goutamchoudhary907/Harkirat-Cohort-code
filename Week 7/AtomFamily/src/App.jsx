import './App.css'
import {RecoilRoot, useRecoilState} from 'recoil'

function App() {

  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
    </RecoilRoot>
  )

  function Todo({id}){
    const todo= useRecoilState(todosAtomFamily(id))
    return (
      <>
      {todo.title}
      {todo.description}
      <br />
      </>
    )
  }
}

export default App
