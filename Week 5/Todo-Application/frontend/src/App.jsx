import { useState, useEffect } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from server
  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Fetch on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
