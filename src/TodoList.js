import React from 'react'


const TodoList=({todoList,deleteHandler})=> {
  return (
    <div >
      {todoList.map((todo,index)=>
        <div key={index} className="toDo">
          <input type="checkbox" id={index} value="second_checkbox"/> <label for={index}>{todo}</label> <button onClick={()=> deleteHandler(index)} ><i class="fas fa-trash-alt"></i></button>
        </div>
      )}
    </div>
  )
}

export default TodoList
