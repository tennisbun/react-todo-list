import React from 'react'
import {useState} from 'react'

function Form({todos, setTodos}) {
   
  const [inputValue, setInputValue] = useState("")

  let handleInputState =(e)=> {
    setInputValue(e.target.value);
  }

  let handleForm =(e)=> {
    e.preventDefault();
    console.log("handleForm");
    setTodos( [ ...todos, {text: inputValue, completed: false, id: Math.random()} ] );
    console.log(todos);
  }

  return (
    <div>
      <form>
        <input placeholder="todo" className="" onChange={handleInputState} />
        <button onClick={handleForm} className="border-2 border-black-200">Add</button>
      </form>
    </div>
  )
}

export default Form
