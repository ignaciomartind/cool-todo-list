import TodoItem from './TodoItem'

import './styles/todoList.css'

function TodoList(props){

    return <div className="todo-list">
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} type="text" placeholder="Add a new task"></input>
        </form>
        {props.data.map(item => <TodoItem key={item.id} data={item}/>)}
    </div>
}

export default TodoList