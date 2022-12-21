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
    updateTodos(e);
    clearForm(e);
  }

  let updateTodos =(e)=> {
    console.log("updatetodos");
    setTodos([{todo: inputValue}]
    //  [...todos, {todo: inputValue, id: Math.random(), completed: false}]
    );
    console.log(todos);

  }

  let clearForm =()=> {
    console.log("clearForm");
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
