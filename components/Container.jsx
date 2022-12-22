import React from 'react'
import Form from './Form.jsx'
import Todo from './Todo.jsx'

function Container({todos, setTodos}) {
  return (
    <div>
      
      { /* handle input and submission*/ }
      <Form setTodos={setTodos} todos={todos}/>
      
      { /* render todos */ }
      {todos.map( (todo)=>{
        return (
          <Todo key={todo.id} todo={todo} 
          todos={todos} setTodos={setTodos}/>) 
      } ) 
      }

    </div>
  )
}

export default Container
