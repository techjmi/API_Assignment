
import React, { useState } from 'react';
import { FormControl, Input, InputLabel, Button, styled, Box } from '@mui/material';
import { PostData } from '../service/api';
const BoxStyle= styled(Box)({
    display:"flex",
    margin:"20px auto",
    textAlign:"center"
})
const intialValue={
    name:"",
    username:"",
    email:"",
    address:""
}
const Add = () => {
    const[user, setUser]= useState(intialValue)
    const handleChange = (e)=>{
        e.preventDefault()
        const name=e.target.name;
        const value=e.target.value
        setUser({
            ...user, [name]:value
        })
    }
  const handleSubmit = async(event) => {
    console.log("the user data is", user)
    event.preventDefault();
        const response= await PostData(user)
        console.log(response)
        if(response.status===200){
            setUser(response.data)
        }

  };

  return (
    <BoxStyle>
      <form onSubmit={handleSubmit} style={{display:"flex", gap:"10px",margin:"auto"}}>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" type="email" aria-describedby="email-helper" name='email' value={user.email} onChange={handleChange}/>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </BoxStyle>
  );
};

export default Add;
