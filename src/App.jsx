import { useState } from 'react'
import './App.css'
import Container from '../components/Container.jsx'
import Todo from '../components/Todo.jsx'


function App() {
  
  const [todos, setTodos,] = useState([])

  return (
    <div className="text-3xl font-bold underline">
    <Container todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
