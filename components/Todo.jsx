import React from 'react'
import {useState} from 'react'
import { FaBeer } from 'react-icons/fa';
import { BsCheckSquareFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

function Todo({todo, todos, setTodos}) {

  const [editing, setediting] = useState(false);
  const [editValue, seteditValue] = useState("");

  let deleteTodo=()=>{}
  let completeTodo=()=>{}
  let editTodo=()=>{}

  return (
    <div>
      
      <div>
        {todo.text}
      </div>
      
      <div>
        <BsCheckSquareFill onClick={completeTodo}/>
        <FaTrash onClick={deleteTodo}/>
        <FaEdit onClick={editTodo}/>
      </div>

    </div>
  )
}

export default Todo
