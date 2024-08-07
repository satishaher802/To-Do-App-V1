import React from 'react'
import TodoListItem from './TodoListItem'




function TodoItems({todoItem,onButtonClick}) {
   
  return ( <div className="container my3 mt-2">
    {todoItem.map((item)=>   <TodoListItem key={item.name} todoName={item.name} todoDate1={item.tododate1} onButtonClick={onButtonClick}></TodoListItem>
       
    )}
    
    {/* <TodoListItem todoName={item.name} todoDate={item.todoDate1}></TodoListItem> */}
  </div>
  )
}

export default TodoItems
