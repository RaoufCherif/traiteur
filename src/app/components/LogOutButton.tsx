import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { signOut } from "next-auth/react"

const LogOutButton = () => {
    const logOut = async () => {
        await signOut();
      };
  return (
    <Button variant="text" color="primary" className="mt-0 " data-testid={'logInButton'}  onClick={() => logOut()}>
    Log Out
  </Button>
  )
}

export default LogOutButton