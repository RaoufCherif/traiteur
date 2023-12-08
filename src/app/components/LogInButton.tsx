"use client"
import React from 'react';
import { Button }from "@mui/material"
import Link from "next/link"




const LogInButton = () => {

  return (
    <Button
    variant='text'
    color='primary'
    className='mt-0'
     >
      
      <Link href={"users"}> 
      Log In 
      </Link>
      </Button>

  )
}

export default LogInButton