export function Todos({ todos }) {
  if (!todos || todos.length === 0) {
    return <p>No todos available</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>
            {todo.completed ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}
