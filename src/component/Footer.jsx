import { Box, Typography, styled } from '@mui/material'
import React from 'react'
const BoxStyle= styled(Box)({
    backgroundColor:"black",
    padding:"20px 0",
    color:"white"
    
})
const Footer = () => {
  return (
   <BoxStyle>
    <Typography> Designed By Digikull Student &nbsp;<a href='https://chic-lollipop-cd173a.netlify.app/' target='blank' style={{color:"white"}}>  Md Shamim Akhter</a></Typography>
   </BoxStyle>
  )
}

export default Footer
