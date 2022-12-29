import React from 'react'  

const TodoSection = ({todoText, themeValue, todoStyle}) => {

  return (
    <div className={todoStyle}>
      {todoText} 
    </div>
  )
}

export default TodoSection
