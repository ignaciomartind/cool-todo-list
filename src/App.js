import Header from './components/Header'
import { useState } from 'react';

import TodoList from './components/TodoList'

import pdata from './data'
import './App.css';

function App() {

  const TIME_HOURS = new Date().getHours()
  
  const [ data, setData ] = useState(pdata)
  const [ newTodo, setNewTodo ] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    if(newTodo != ""){
      setData([...data, {
        id: data.length,
        title: newTodo
      }])
    }

  }

  function handleChange(e){
    setNewTodo(e.target.value)
  }

  return (
    <div className="app">
      <Header />
      <TodoList data={data} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  );
}

export default App;
