import { useEffect } from "react"

import './styles/todoList.css'

function TodoItem(props){

    useEffect(()=>{

    }, [])

    return <div className="todo-item">
        <p>{props.data.id}</p>
        <h3>{props.data.title}</h3>
    </div>
}

export default TodoItem