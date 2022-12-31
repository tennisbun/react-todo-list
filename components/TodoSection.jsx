import React from 'react'  
import { motion } from "framer-motion"

const TodoSection = ({todoText, themeValue, todoStyle}) => {

  return (
    <motion.div className={todoStyle}
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
    >
      {todoText} 
    </motion.div>
  )
}

export default TodoSection
