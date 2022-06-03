import { Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './../assets/app.styles';

function Header() {
    const classes= useStyles()
  return (
    <>
    <Typography className={classes.header}>
        Feelin' Productive today?
    </Typography>
    </>
  )
}

export default Header;