import React from 'react';
import { FaMoon } from 'react-icons/fa';
import {useContext, useState } from 'react';
import {ThemeContext} from '../src/App.jsx'

function Nav() {
  const theme = useContext(ThemeContext);
  const themeValue = theme.theme;

  let changeTheme =()=>{
    theme.setTheme(!theme.theme);
  };

  let lightNavStyle = "bg-gray-100 text-light mb-10 px-1 py-1 pl-2 flex justify-between transition ease-in-out delay-150 shadow-lg";
  let darkNavStyle = "bg-stone-900 text-white mb-10 px-1 py-1 pl-2 flex justify-between transition ease-in-out delay-150 shadow-lg";

  return (
    <div className={themeValue ? darkNavStyle : lightNavStyle }>
      <div>
        <p>React Todo List</p>
      </div>
      <div className="px-1 py-1 text-sm cursor-pointer text-xs">
        <FaMoon onClick={changeTheme}/>
      </div>
    </div>
  )
}

export default Nav
