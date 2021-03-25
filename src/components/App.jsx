import React, { useState } from "react";

function App() {

  const[name, setName] = useState("");
  const[enteredName, setEnteredName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  // function handleClick() {
  //   console.log(enteredName);
  //   setEnteredName(name)
  // }

  // return (
  //   <div className="container">
  //     <h1>Hello {enteredName}</h1>
  //     <input 
  //       onChange={handleChange}
  //       type="text" 
  //       placeholder="What's your name?" 
  //       value={name}  
  //       />
  //     <button onClick={handleClick}>Submit</button>
  //   </div>
  // );

  function handleClick(event) {
    setEnteredName(name)
    event.preventDefault();    // To prevent default behavior of refreshing page.  
  }

  return (
    <div className="container">
      <h1>Hello {enteredName}</h1>
      <form onSubmit={handleClick}>
        <input 
          onChange={handleChange}    
          type="text" 
          placeholder="What's your name?" 
          value={name}    
        />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
