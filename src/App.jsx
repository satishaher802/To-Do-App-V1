import { useState } from "react";
import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomMsg from "./components/WelcomMsg";

 function app(){
 
let todoDates=new Date().toLocaleDateString();
let initialtodoDetails=[
  
]
const [todoDetails, settoDoName]=useState(initialtodoDetails);

const handleNewItem=(itemName,itemDueDate)=>{
//console.log('new item add:' + itemName);
//console.log('date:' + itemDueDate)
const newtodItems=[...todoDetails,{name:itemName,tododate1:itemDueDate},];
//console.log(newtodItems)
settoDoName(newtodItems);
};

const handleDeleteButtonClick=(dotoitemName)=>{
   const newDoItems=todoDetails.filter(item => item.name !==dotoitemName)
   settoDoName(newDoItems);
}

  return <center className="to-do-container">
    <AppName/>
    <AddToDo onNewitem={handleNewItem}/>
    {todoDetails.length ===0 && <WelcomMsg></WelcomMsg>}
    <TodoItems todoItem={todoDetails} onButtonClick={handleDeleteButtonClick}/>
  </center>
  
 }

 export default app;