"use client"
import React, {ReactNode, useState, useEffect} from 'react'
import { SessionProvider } from 'next-auth/react'
 

interface Props {
    children: ReactNode;
}

const Providers = (props: Props) => {
  return<SessionProvider> { props.children } </SessionProvider>
  
}

export default Providers