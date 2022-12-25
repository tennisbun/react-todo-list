import React from 'react'
import Form from './Form.jsx'
import Todo from './Todo.jsx'

function Container({todos, setTodos}) {
  return (
    <div className="flex justify-center flex-col w-96">
      <Form setTodos={setTodos} todos={todos}/>
      
      { todos.map( (todo)=>{
        return (
          <Todo key={todo.id} id={todo.id} todo={todo} 
          todos={todos} setTodos={setTodos}/>) 
        } ) 
      }
    </div>
  )
}

export default Container
