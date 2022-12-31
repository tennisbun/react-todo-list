import {React, useState} from 'react'

function EditInput({editValue, editing, setEditValue, setEditing, todoStyle, themeValue, todos, setTodos, todo}) {

 const [inputState, setInputState] = useState(todo.text);

  let editingInputStyle="bg-transparent outline-none w-80"
  let editingInputStyleLight="bg-transparent outline-none text-black"

  let editInputHandler=(e)=>{setEditValue(e.target.value);}

  let handleEditSubmit=(e)=>{
      e.preventDefault();
      console.log("handleEditSubmit function on submit running...");

      const newState = todos.map(obj => {
        if (obj.id === todo?.id) {
          return {...obj, text: editValue };
        }
        return obj;
      });

      setTodos(newState);
      setEditing(!editing);
  } 

  let handleFocusOut=()=>{
    setEditing(false); 
  };

  return(
      <div className={todoStyle} onBlur={handleFocusOut}>
        <form onSubmit={handleEditSubmit}>
          <input autoFocus placeholder={todo?.text}
            className={themeValue ? editingInputStyle : editingInputStyleLight} 
            onChange={editInputHandler}>
          </input>
        </form>
      </div>
  )
}

export default EditInput
