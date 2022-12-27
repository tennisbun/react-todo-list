import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { FaBeer } from 'react-icons/fa';
import { BsCheckSquareFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { ThemeContext } from '../src/App.jsx';
import {BsFillEraserFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';

function Todo({todo, todos, setTodos, id}) {
  
  const theme = useContext(ThemeContext);
  let themeValue = theme.theme;

  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [completed, setCompleted] = useState(false);
  const [todoStyle, setTodoStyle] = useState("");


  useEffect(() => {
      if(themeValue && completed){
        setTodoStyle("w-70 h-6 text-green-400 bg-transparent w-80 my-1 mr-2 px-2 pb-1 rounded-sm border-b border-green-600 transition ease-in-out delay-150 line-through overflow-hidden pb-4 text-sm");
      } else if(themeValue && !completed){
        setTodoStyle("w-70 h-6 text-white bg-transparent w-80 my-1 mr-2 px-2 pb-1 rounded-sm border-b border-stone-700 transition ease-in-out delay-150 overflow-hidden pb-4 text-sm overflow-hidden");
      } else if (!themeValue && completed){
        setTodoStyle("w-70 h-6 text-black bg-transparent w-80 my-1 mr-2 px-2 pb-1 rounded-sm border-b border-green-600 transition ease-in-out delay-150 line-through overflow-hidden text-sm");
      } else if(!themeValue && !completed){
        setTodoStyle("w-70 h-6 text-black bg-transparent w-80 my-1 mr-2 px-2 pb-1 rounded-sm border-b border-stone-700 transition ease-in-out delay-150  pb-4 text-sm overflorw-hidden");
      };
  }, [themeValue, completed]);

  let completeTodo=()=>{
    // completes todo
    setCompleted(!completed); console.log(completed)
  };
  
  let deleteTodo=()=>{
    // deletes todo
    setTodos(todos.filter((el)=>el.id !== todo.id));
  };
  
  let editTodo=()=>{
    // to change editing state and show input
    setEditing(!editing);
  };

  let editInputHandler=(e)=>{
    // prepares the todo input value
    let newLetter = e.target.value;
    setEditValue(...editValue, newLetter);
  }

  let handleEditSubmit=(e)=>{
    // changes the previous text value of the todo object
    e.preventDefault();
    //setTodos(todos.map((item)=>{
    //  if(item.id == todo.id){
    //    return {
    //      // new array with changed value
    //    }
    //  }
    //}));
    setEditing(!editing);
  }

  let optionsStyle = "flex py-2 w-20";
  let iconStyle= "cursor-pointer mr-1 text-stone-200 transition ease-in-out delay-150 ";
  let iconStyleLight = "cursor-pointer mr-1 text-stone-800s transition ease-in-out delay-150";


  let iconContainerStyle = "bg-stone-900 text-lg rounded-sm h-6 w-6 flex content-center justify-center items-center ml-1 p-1 transition ease-in-out delay-150"
  let iconContainerStyleLight = "bg-stone-200 text-lg rounded-sm h-6 w-6 flex content-center justify-center items-center ml-1 p-1 transition ease-in-out delay-150"

  let editingInputStyle="bg-transparent outline-none"
  let editingInputStyleLight="bg-transparent outline-none text-black"


  let EditingSection=({handleEditSubmit, editInputHandler})=>{
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

  let TodoSection=()=>{
    return(
      <div className={todoStyle} >
        {todo.text}
      </div>
    )
  }


  return (
    <div className="flex">

          { editing 
            ?
            <EditingSection 
            handleEditSubmit={handleEditSubmit}
            editInputHandler={editInputHandler}
            />
            : 
          <TodoSection/> }
     
          
          <div className={optionsStyle}>
            <div className={themeValue ? iconContainerStyle : iconContainerStyleLight}>
              <AiFillCheckCircle onClick={completeTodo} className={themeValue ? iconStyle : iconStyleLight}/>
            </div>
           
            <div className={themeValue ? iconContainerStyle : iconContainerStyleLight}>
              <FaEdit onClick={editTodo} className={themeValue ? iconStyle : iconStyleLight}/>
            </div>
    
            <div className={themeValue ? iconContainerStyle : iconContainerStyleLight}> 
              <BsFillEraserFill onClick={deleteTodo} className={themeValue ? iconStyle : iconStyleLight}/>
            </div> 
         </div>
    
    </div>
  )
}

export default Todo





