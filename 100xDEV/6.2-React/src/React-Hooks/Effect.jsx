import React, { useEffect } from 'react'
import axios from 'axios'

const Effect = () => {

    const [todos, setTodos] = React.useState([])

    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todos`).then((res) => {
            setTodos(res.data.todos)
        })
    }, [])

  return (
    <div>
        {todos.map((todo) => <Todo title={todo.title} description={todo.description} />)}
    </div>
    )
}

function Todo({ title, description }) {
    <div>
        <h1>
            {title}
        </h1>
        <h5>
            {description}
        </h5>
    </div>
    
}

export default Effect