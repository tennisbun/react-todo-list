import React from 'react'
import Form from './Form.jsx'
import Todo from './Todo.jsx'
import { Transition } from 'react-transition-group';
import { useRef } from 'react';


function Container({todos, setTodos, filterStatus}) {
  
  const nodeRef = useRef(null);

  let handleFilter=(filterStatus)=>{
    switch(filterStatus){

      case "View All":
        console.log("view All");
      break;

      case "Completed":
        console.log("Completed");
      break;
        
      case "Active":
        console.log("Active");
      break;

    }
  }
  
    return (
    
      <div className="justify-center flex-col w-96 mb-56 h-screen ">
      
        <Form setTodos={setTodos} todos={todos}/>

        <div className="h-80 overflow-scroll">
        { 
          //View All
          todos.map((todo)=>{
            return (
              <Todo key={todo.id} id={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
            )  
          })
        }
      </div>

    </div>

  )
}

export default Container
