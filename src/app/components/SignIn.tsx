"use client"
import React from 'react'
import { signIn, signOut, useSession} from 'next-auth/react';

const SignIn = () => {
    const nom = "brahimi"
const {data: session}  = useSession();
    if(session?.user?.name === nom){
        return(
            <div className='flex gap-4 ml-auto'>
                <p>{session.user.name}</p>
                <button 
                    onClick={() => signOut()}
                    className='text-red-700'
                 >
                    Sign Out
                </button>
            </div>
        )
    }
  return (
    <button 
   onClick={() => signIn()}
    className='text-blue-700'
    >
    Sign In
    </button>
   
  )
}

export default SignIn