import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { inputStyles } from './input.style';
function Input({getData , handelCreatNewTodo,editItemTodo, updateTodoCard,lastValue,inputValue,currentValue }) {
  const classes= inputStyles()
  return (
    // build the input and Button(2buttons for add ,and edit)
    <Box Container className={classes.parent} >
        <TextField value={currentValue} onChange={(e)=>getData(e.target.value)} id="outlined-basic" label="Todo input" variant="outlined" className={classes.root}>{editItemTodo}</TextField>
        <Button style={{display:`${inputValue?'none':'flex'}`}} onClick={()=>{handelCreatNewTodo()}} className={classes.btn}>Add</Button>
        <Button style={{display:`${inputValue?'flex':'none'}`}} onClick={()=>{updateTodoCard(currentValue)}} className={classes.btn}>Edit</Button>
    </Box>
  )
}

export default Input