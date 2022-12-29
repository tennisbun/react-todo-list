import React from 'react'

function EditInput({editValue, editing, setEditValue, setEditing, todoStyle, themeValue, todos, setTodos, todo}) {

  let editingInputStyle="bg-transparent outline-none"
  let editingInputStyleLight="bg-transparent outline-none text-black"

  let editInputHandler=(e)=>{setEditValue(e.target.value);}

  let handleEditSubmit=(e)=>{
      e.preventDefault();
      setTodos(todos.map((item)=>{
        if(item.id == todo.id){
          return {...todos, text: editValue};
          console.log(todos);
        }
      }));
      console.log("Handled Edit");
      console.log(editValue);
      setEditing(!editing);
  }    

  return(
      <div className={todoStyle}>
        <form onSubmit={handleEditSubmit}>
          <input autoFocus  
            className={themeValue ? editingInputStyle : editingInputStyleLight} 
            onChange={editInputHandler}>
          </input>
        </form>
      </div>
  )
}

export default EditInput
