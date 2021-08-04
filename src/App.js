import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList';
import './App.css'

const App =()=>{
  const [task, setTask]=useState("");
  const [todos,setTodos]= useState([])
  const changeHandler =e=>{
    setTask(e.target.value)
  }
  const submitHandler =e =>{
    e.preventDefault();
    console.log(task);
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler =(indexValue)=>{
    const newTodos= todos.filter((todos,index)=> index !== indexValue);
    setTodos(newTodos)
  }
return (
  <div>
    <center>
      <div className="container">
        <h1>To Do's</h1>
        <form onSubmit={submitHandler} >
          <input type="text" name="task" value={task} onChange={changeHandler}  placeholder="Enter todo..."/> &nbsp;
          <input type="submit" value="ADD" name="Add"/>
        </form>
        <TodoList todoList={todos} deleteHandler ={deleteHandler} />

      </div>
    </center>
  </div>
)
}
export default App