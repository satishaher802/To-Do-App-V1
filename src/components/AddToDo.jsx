import { useState,useRef } from "react";
import TodoItems from "./TodoItems";
import { MdAddChart } from "react-icons/md";

function AddToDo({onNewitem}){

  const[todoname,settodoname]=useState([]);
  const[duedate,setdueDate]=useState([]);

  const handleNameChange=(event)=>{
    settodoname(event.target.value)
  }
  const handleDateChange=(event)=>{
    setdueDate(event.target.value)
  }

  const handleAddButtonClick=(event)=>{
    console.log(event); 
    event.preventDefault();
    onNewitem(todoname,duedate)
    settodoname("");
    setdueDate("");
  }

return <div className="container text-center">
  <form className="row" onSubmit={handleAddButtonClick}  >
    <div className="col-6">
      <input type="text" onChange={handleNameChange} className="form-control" placeholder="Enter To do here" value={todoname} />
    </div>
    <div className="col-4">
      <input type="date" value={duedate} onChange={handleDateChange} className="form-control" />
    </div>
    <div className="col-2">
      <button className="btn btn-success"><MdAddChart /> </button>
    </div>
    
  </form>    
</div>

}

export default AddToDo;