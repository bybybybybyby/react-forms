import React, { useState } from "react";

function App() {

  const[name, setName] = useState("");
  const[enteredName, setEnteredName] = useState("");

  function handleClick() {
    console.log(enteredName);
    setEnteredName(name)

  }

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }


  return (
    <div className="container">
      <h1>Hello {enteredName}</h1>
      <input 
        onChange={handleChange}
        type="text" 
        placeholder="What's your name?" 
        value={name}  
        />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
