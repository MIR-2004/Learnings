import React from 'react'

let counter = 4;

const Todo = () => {

    const [todo, setTodo] = useState([{
        id:1,
        title: "go to gym",
        description:"go to gym today"
    },
    {
        id:1,
        title: "go to gym",
        description:"go to gym today"
    },
    {
        id:1,
        title: "go to gym",
        description:"go to gym today"
    }])

    function addTodo(){
        setTodo(...todo, {
            id:counter++,
            title: "go to gym",
            description:"go to gym today"
        })
    }

  return (
    <div>
        <button onClick={addTodo}>add todo</button>
        {todo.map(val => <Todo key={todo.id} title={todo.title} description={todo.description}/> )}
    </div>
  )
}

function Todo({title, description}) {
    return <div>
        <h1>
            {title}
        </h1>
        <h5>
            {description}
        </h5>
    </div>
}

export default Todo