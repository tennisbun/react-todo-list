import { useState, useContext, createContext } from 'react'
import './App.css'
import Container from '../components/Container.jsx'
import Todo from '../components/Todo.jsx'
import Nav from '../components/Nav.jsx'
import AnimatedCursor from 'react-animated-cursor'
export const ThemeContext = createContext(null);
export const FilterContext = createContext(null);

function App() {

  const [theme, setTheme] = useState(true);
  const [todos, setTodos,] = useState([]);
  const [filterStatus, setFilterStatus] = useState("View All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const containerWrapperStyle = "flex justify-center";
  
  let lightBg = "bg-stone-300 transition ease-in-out delay-150 p-50 h-max";
  let darkBg = "bg-stone-800 transition ease-in-out delay-150 p-50 h-screen";
  
  let Cursor =()=>{
    return(
      <AnimatedCursor color='200,200,200'/> 
    )
  }
    
  let CursorLight =()=>{
    return(
      <AnimatedCursor color='000,000,000'/> 
    )
  }
         //{theme ? <Cursor/> : <CursorLight/>}
  return (
    <div className={theme ? darkBg : lightBg} id='App'>
          
 
          <FilterContext.Provider value={{filterStatus: filterStatus, setFilterStatus: setFilterStatus}}>
            <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
              <Nav/> 
              { /* Main container */}
              <div className={containerWrapperStyle}>
                <Container todos={todos} setTodos={setTodos} 
                  filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
              </div>
            </ThemeContext.Provider>
          </FilterContext.Provider>
          
    </div>
  )
}
export default App
