import React, { useEffect } from 'react'


function useTodos(){
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      setTodos(response.data.todos)
    })

  }, [])
}
  
const App = () => {

  const todos = useTodos()
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
          <p>{todo.createdAt}</p>
          <p>{todo.updatedAt}</p>
          </div>
        ))}
    </div>
  )
}

export default App