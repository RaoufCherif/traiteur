"use client"
import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";
import { MailService } from "@sendgrid/mail";





function ConfirmEmail() {

const [id, setId] : any= useState('');
const [token, setToken] : any= useState('');

useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setId(query.get('id'));
    setToken(query.get('token'))

}, [])


const confirmUser = async () => {

    try {
        const user =    {id: "1234567890", token: "abcdefghijklmnopqrstuvwxyz"}
        if(user.id === id && user.token === token) {

          alert("Bienvenue ! ")
        } 

        const confirmUrl = await SendGridMail.getUrl('confirm', id, token);
    } catch (error) {
        error 
    }
}
    
    return (
        <main className=" h-screen flex flex-col justify-center gap-4 items-center   ">

            <form onSubmit={confirmUser}>
          
            <h1>{id}</h1>
            <h1>{token}</h1>

            <button 
            type="submit"
            className="bg-blue-700 text-white p-2 rounded-md ">  <h1>Email confirmer !</h1> </button>

            </form>
        </main>
    )
}


export default ConfirmEmail;






// // pages/confirm.tsx
// import React from 'react';
// import { useRouter } from 'next/router';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// const ConfirmPage = () => {
//   const router = useRouter();
//   const { token } = router.query;

//   const handleConfirm = async () => {
//     try {
//       const user = await prisma.user.update({
//         where: { confirmationToken: token },
//         data: { emailConfirmed: true, confirmationToken: null },
//       });
//       // Redirect to success page or log in
//     } catch (error) {
//       // Handle error, e.g., invalid token
//     }
//   };

//   return (
//     // ...confirmation page UI...
//   );
// };
