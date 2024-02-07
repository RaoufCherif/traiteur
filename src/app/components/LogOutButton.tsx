import React from 'react'
import { signOut } from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

const LogOutButton = () => {
    const logOut = async () => {
        await signOut({callbackUrl: process.env.SIGNOUT_LANDINGPAGE   });

        console.log( process.env.SIGNOUT_LANDINGPAGE  , 'Je suis l URL');
      };
  return (
    <button  className=" bg-red-500 p-1 rounded-md"  onClick={() => logOut()}>
     <FontAwesomeIcon icon={faSignOut }  className=' w-7 text-white z-50' />
  </button>
  )
}

export default LogOutButton