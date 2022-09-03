import './App.css';
import React, {useState} from 'react';

function App() {

  const [toDos, setToDos] = useState(["cleanse the forests", "digest the walls", "eat the future", "divulge our secrets"])

  const [newToDo, setNewToDo] = useState("")

  const toDoNodes = toDos.map((toDo, index)=>{
    return(
      <li key={index}><span>{toDo}</span></li>
    )
  })

  const handleInput = (event)=>{
    setNewToDo(event.target.value)
  }

  const saveNewToDo = (event)=>{
    event.preventDefault();
    const copyToDos = [...toDos]
    copyToDos.push(newToDo)
    setToDos(copyToDos)
    setNewToDo("")
  }

  return (
    <div className='App'>
      <ul>
        {toDoNodes}
      </ul>

      <form onSubmit={saveNewToDo}>
        <label htmlFor='new-todo'>Add a new mission:</label>
        <input id='new-todo' type="text" value={newToDo} onChange={handleInput}/>
        <input type="submit" value="Save new mission"/>
      </form>

    </div>
  );
}

export default App;
