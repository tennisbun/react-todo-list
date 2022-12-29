import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { FaBeer } from 'react-icons/fa';
import { BsCheckSquareFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { ThemeContext } from '../src/App.jsx';
import {BsFillEraserFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import TodoSection from './TodoSection.jsx';
import EditInput from './EditInput.jsx';

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

  let completeTodo=()=>{ setCompleted(!completed); console.log(completed)};
  let deleteTodo=()=>{setTodos(todos.filter((el)=>el.id !== todo.id));};
  let editTodo=()=>{setEditing(!editing);};

  let optionsStyle = "flex py-2 w-20";
  let iconStyle= "cursor-pointer mr-1 text-stone-200 transition ease-in-out delay-150 ";
  let iconStyleLight = "cursor-pointer mr-1 text-stone-800s transition ease-in-out delay-150";

  let iconContainerStyle = "bg-stone-900 text-lg rounded-sm h-6 w-6 flex content-center justify-center items-center ml-1 p-1 transition ease-in-out delay-150"
  let iconContainerStyleLight = "bg-stone-200 text-lg rounded-sm h-6 w-6 flex content-center justify-center items-center ml-1 p-1 transition ease-in-out delay-150"

  return (
    <div className="flex">
          
          { 
            editing ?
            <EditInput editValue={editValue} editing={editing} themeValue={themeValue}
            setEditValue={setEditValue} setEditing={setEditing} todoStyle={todoStyle}
            todos={todos} setTodos={setTodos} todo={todo}/>
            : 
            <TodoSection todoText={todo.text} themeValue={themeValue} todoStyle={todoStyle}/> 
          }
          
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





