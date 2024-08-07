import React from 'react'

  const TodoListItem =({todoName,todoDate1,onButtonClick})=>{ 
    
  return (
  <div className='row'>
  <div className="col-6">{todoName} </div>
  <div className="col-4"> {todoDate1}</div>
  <div className="col-2"><button type="button" onClick={()=> onButtonClick(todoName)} className="btn btn-danger">Delete
     </button></div>
  </div>
  );
}

export default TodoListItem
