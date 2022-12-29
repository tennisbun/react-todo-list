import React from 'react'
import { useState, useRef, useContext } from 'react'
import { ThemeContext } from '../src/App.jsx'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({todo: yup.string().required()});

function Form({todos, setTodos}) {
   
  const theme = useContext(ThemeContext);
  const themeValue = theme.theme;

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const [viewAll, setViewAll] = useState({active: false, style: ""});
  const [active, setActive] = useState({active: false, style: ""});
  const [completed, setCompleted] = useState({active: false, style: ""});

  let changeFilter=(type)=>{
    if(type == 0){
      setViewAll({active: true, style: "text-gray-600 cursor-pointer"});
      setActive({active: false, style: ""});
      setCompleted({active: false, style: ""});
    } else if( type == 1){
      setViewAll({active: false, style: ""});
      setActive({active: true, style: "text-gray-600 cursor-pointer"});
      setCompleted({active: false, style: ""});
    } else if ( type == 2){
      setViewAll({active: false, style: ""});
      setActive({active: false, style: ""});
      setCompleted({active: true, style: "text-gray-600 cursor-pointer"});
    }
  };

  let handleInputState =(e)=> {setInputValue(e.target.value);};

  let handleForm =(e)=> {
    e.preventDefault();
    setTodos( [ ...todos, {text: inputValue, completed: false, id: Math.random()} ] );
    setInputValue("");
    inputRef.current.reset();
  }
   
  let inputStyle=" outline-none rounded-sm px-1 mb-1 w-full h-6 pb-2 mr-2 border-b border-stone-600 bg-transparent text-white transition ease-in-out delay-150";
  let inputStyleLight=" outline-none rounded-sm px-1 mb-1 w-full h-6 pb-2 mr-2 border-b border-stone-600 bg-transparent text-black transition ease-in-out delay-150";

  let addButtonStyle="text-white w-14 rounded-sm px-1 rad text-sm border-b border-stone-600 hover:bg-stone-900 transition ease-in-out delay-150 p-1" ;
  let addButtonStyleLight= " text-black w-14 rounded-sm px-1 rad text-sm border border-stone-900 hover:bg-stone-400 transition ease-in-out delay-150";

  let filterOptionsStyle="flex text-white text-xs mb-8 mt-2 transition ease-in-out delay-150 pl-1 cursor-pointer"
  let filterOptionsStyleLight="flex text-black text-xs mb-8 mt-2 transition ease-in-out delay-150 pl-1 cursor-pointer"
  let filterOptionSelected="cursor-pointer text-stone-600"

  const {register, handleSubmit, errors} = useForm({resolver: yupResolver(schema)});

  return (
    <div>
    
     <form ref={inputRef} onSubmit={handleForm} className="w-full" >
         <input placeholder="What needs to be done?"  
           className={themeValue ? inputStyle : inputStyleLight} onChange={handleInputState}
         /> 
     </form>

     <div className={themeValue ? filterOptionsStyle : filterOptionsStyleLight}>
       <span className={viewAll.style} onClick={()=>changeFilter(0)} >View All</span>
       <p> &nbsp;&nbsp; / &nbsp;&nbsp;  </p>
       <span className={active.style} onClick={()=>changeFilter(1)} >Active</span>
       <p> &nbsp;&nbsp; / &nbsp;&nbsp; </p>
       <span className={completed.style} onClick={()=>changeFilter(2)} >Completed</span>
     </div>

    </div>
  )
}

export default Form
