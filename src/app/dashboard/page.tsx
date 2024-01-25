"use client"
import React from 'react'
import { Session } from 'next-auth-user-session';
import { useSession } from 'next-auth/react';



const Dashboard = () => {
   
    const {data: session, status} = useSession();
    console.log("Je suis ", session?.user)
if (status === "authenticated") {
    return (
        <section 
        className=' flex  flex-col m-48 gap-6 items-center'
        >
            <div>
            <h1
             className=' fle text-pink-400  '
             >Votre dashboard</h1>
             </div>

             <div className=' flex flex-col w-fit p-4 bg-amber-200 gap-2 '>
    <p> Signed in as :  {session.user.email}</p>
    <p>Id : {session.user.id} </p>
    <p>Nom : {session.user.nom}</p>
    <p>Prenom : {session.user.prenom}</p>
    </div>



    </section>
    )
}

}

export default Dashboard;


