import React from 'react'
import { useStyl } from './card.style';
import { Box, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

function Card(props) {
    const classes= useStyl()
  return (
    <Box style={{backgroundColor:`${props.colorGenerator[props.index]}`}}  className={classes.card} >
    <Typography className={classes.text}>
{props.sendInpue[props.index]}
    </Typography>
<Box>
<DeleteForeverIcon  onClick={()=>props.deleteItemTodo(props.index)} className={classes.icon}></DeleteForeverIcon>
<DriveFileRenameOutlineIcon  onClick={()=>props.editItemTodo(props.sendInpue[props.index])} className={classes.editIcon}></DriveFileRenameOutlineIcon>
</Box>
    </Box>
  )
}

export default Card