import React from 'react'
import Form from './Form.jsx'
import Todo from './Todo.jsx'

function Container({todos, setTodos}) {
  return (
    <div>
      <Form setTodos={setTodos} todos={todos}/>
      {todos} 
    </div>
  )
}

export default Container
