"use client"
import React from 'react'
import { Session } from 'next-auth-user-session';
import { useSession } from 'next-auth/react';



const Dashboard = () => {
   
    const {data: session, status} = useSession();
    console.log("Je suis ", session?.user)
if (status === "authenticated") {
    return (
        <section>
    <p> Signed in as :  {session.user.email}</p>
    <p>Id : {session.user.id} </p>
    <p>Nom : {session.user.nom}</p>
    <p>Prenom : {session.user.prenom}</p>



    </section>
    )
}

}

export default Dashboard;


