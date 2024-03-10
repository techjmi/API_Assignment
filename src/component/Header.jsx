import React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material"
const Header = () => {
  return (
   <>
   <AppBar position='sticky' sx={{padding:'10px 0'}}>
{/* <Toolbar sx={{textAlign:"center"}}> */}
<Typography variant='h4' sx={{textAlign:"center"}}>User Data Table</Typography>
{/* </Toolbar> */}
   </AppBar>
   </>
  )
}

export default Header