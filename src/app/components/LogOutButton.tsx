import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { signOut } from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

const LogOutButton = () => {
    const logOut = async () => {
        await signOut();
      };
  return (
    <Button variant="text" color="primary" className="mt-0 " data-testid={'logInButton'}  onClick={() => logOut()}>
     <FontAwesomeIcon icon={faSignOut }  className=' w-7 text-white z-50' />
  </Button>
  )
}

export default LogOutButton