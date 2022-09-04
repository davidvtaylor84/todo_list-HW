import './App.css';
import React, {useState} from 'react';

function App() {

  const [toDos, setToDos] = useState(
    [{name:"cleanse the forests", priority:"high"}, 
    {name:"digest the walls", priority:"low"},
    {name: "eat the future", priority:"high"}, 
    {name:"divulge our secrets", priority:"low"}])

  const [newToDo, setNewToDo] = useState("")

  const toDoNodes = toDos.map((toDo, index)=>{
    return(
      <li key={index}><span>{toDo.name}</span></li>
    )
  })

  const handleInput = (event)=>{
    setNewToDo(event.target.value)
  }

  const handlePriority =(event)=>{
    setNewToDo(event.target.value)
  }

  // const handlePriority = (event)=>{
  //   let toDo = newToDo
  //   toDo.priority[event.target.value] = event.target.checked
  // }

  const saveNewToDo = (event)=>{
    event.preventDefault();
    const copyToDos = [...toDos]
    copyToDos.push({name: newToDo, priority: "Low"})
    setToDos(copyToDos)
    setNewToDo("")
  }

  return (
    <>
    <div className='App'>
      <ul>
        {toDoNodes}
      </ul>

      <form onSubmit={saveNewToDo}>
        <label htmlFor='new-todo'>Add a new mission:</label>
        <input id='new-todo' type="text" value={newToDo.name} onChange={handleInput}/>
        <input type="radio" id='new-todo' value="High" name='priority' checked={newToDo.priority === "High"} onChange={()=>handlePriority("Low")}/>
        <label htmlFor='new-todo' for="new-todo">High</label>
        <input type="radio" id='new-todo' value="Low" checked={newToDo.priority === "Low"} name='priority' onChange={()=>handlePriority("Low")}/>
        <label htmlFor='new-todo' for="new-todo">Low</label>
        <input type="submit" value="Save new mission"/>
      </form>

    </div>
    </>
  );
}

export default App;

