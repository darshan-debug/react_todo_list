import { useState } from 'react';
function Input({taskList,settaskList}){
  const [inputValue,setinputValue]=useState('');
  function handleChange(event){
    //console.log(event);
    setinputValue(event.target.value);
  }
  function handleSubmit(){
    //console.log(event);    
    newTaskList=[...taskList,inputValue];
    settaskList(newTaskList);
    console.log(newTaskList); 
    setinputValue('');
  }
  return (
    <div>
        <input value={inputValue} type="text" placeholder="Add your task" onChange={handleChange}/>
        <div>
          <button onClick={handleSubmit} >Submit</button>
        </div>
    </div>
  );
}
export default function App() {
  const [taskList,settaskList]=useState(['Walk the dog','Water the plants','Wash the dishes']);
  function DeleteTask(task){
    newTaskList=taskList.filter((e)=>e!==task)
    settaskList(newTaskList);
    console.log(newTaskList);
  }
  return (
    <div>
      <h1>Todo List </h1>
      <Input taskList={taskList} settaskList={settaskList}/>
      <ul>
      {taskList.map((task)=>(
        <li>
          <span>{task}</span>
          <button onClick={()=>DeleteTask(task)}>Delete</button>
        </li>
      ))}
        
        
      </ul>
    </div>
  );
}