import { Box } from '@mui/material'
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Input from './../component/Input/index';
import { useStyles } from './../assets/app.styles';
import Header from './../Header/index';
import Card from './../component/Card/index';
function App() {
  // introduce the useStates
  const [todoList,setTodoList]=useState([]);
  const [colorCard,setColorCard]=useState([]);
  const [editCard, setEditCard]=useState('');
  const [inputValue,setInputValue]=useState("");
  const [lastValue , setLastValue]=useState("");
  const [currentValue , setCurrentValue]=useState("");
    // localStorage for store informations
    useEffect(() => {
      // localstorage for todoList
  let todoConvertToJson =localStorage.getItem('todoList');
  let todoJsonToList=JSON.parse(todoConvertToJson);
  if(todoJsonToList==null){
    todoJsonToList=[];
  }
  if(todoJsonToList[0]){
    setTodoList(todoJsonToList);
  }
      // localstorage for color

  let colorToJson = localStorage.getItem('colorCard');
  let colorCardToObject=JSON.parse(colorToJson);
  if(colorCardToObject==null){
    colorCardToObject=[];
  }
  if(colorCardToObject[0]){
    setColorCard(colorCardToObject);
  }
}, []);
useEffect(()=>{
  localStorage.setItem("todoList",JSON.stringify(todoList));
  localStorage.setItem("colorCard",JSON.stringify(colorCard));
},[todoList])
// color Generator 
  const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
  const getData=(value)=>{
    setInputValue(value)
    setCurrentValue(value)
  }
  // create new todo section
  const handelCreatNewTodo=(e)=>{
    setTodoList([...todoList,inputValue])
    console.log(todoList)
    setColorCard([...colorCard,randColor()])
  }
  //Deliting section 
  const deleteItemTodo=(index)=>{
  todoList.splice(index,1);
  colorCard.splice(index, 1);
  setTodoList([...todoList]);
  }
    //Editing section
  const editItemTodo=(massage)=>{
    setEditCard(massage);
    setLastValue(massage);
    setCurrentValue(massage);
  }
      //Up To Date section
  const updateTodoCard = (value) =>{
    let index = todoList.indexOf(editCard)
    todoList[index] = value;
    setTodoList([...todoList]);
    setEditCard('')
    setLastValue('');
    setCurrentValue("");
    console.log(todoList)
    console.log(value)
  }
  const classes= useStyles()
  return (
    // components as header and input
    <Box component="Form" className={classes.root}>
    <Container>
      <Header></Header>
      <Input colorCard={colorCard} todoList={todoList} inputValue={editCard ? editCard : ''} currentValue={currentValue} editItemTodo={editItemTodo} lastValue={lastValue} updateTodoCard={updateTodoCard} getData={getData} handelCreatNewTodo={handelCreatNewTodo}></Input>
      {
        todoList.map((item,index)=> <Card editItemTodo={editItemTodo} deleteItemTodo={deleteItemTodo} sendInpue={todoList} index={index} colorGenerator={colorCard} lastValue={lastValue}></Card>)
      }
     
    </Container>
    </Box>
  )
}
export default App