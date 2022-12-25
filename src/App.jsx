import { useState, useContext, createContext } from 'react'
import './App.css'
import Container from '../components/Container.jsx'
import Todo from '../components/Todo.jsx'
import Nav from '../components/Nav.jsx'
export const ThemeContext = createContext(null);
export const FilterContext = createContext(null);


function App() {

  const [theme, setTheme] = useState(true);
  const [todos, setTodos,] = useState([]);

  const containerWrapperStyle = "flex flex-col justify-center align-center items-center"
  
  let lightBg = "bg-stone-300 h-screen transition ease-in-out delay-150";
  let darkBg = "bg-stone-800 h-screen transition ease-in-out delay-150";
  
  return (
    <div className={theme ? darkBg : lightBg}>
          <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            <Nav/> 
            { /* Main container */}
            <div className={containerWrapperStyle}>
              <Container todos={todos} setTodos={setTodos} />
            </div>
          </ThemeContext.Provider>
    </div>
  )
}
export default App
