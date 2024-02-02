// pages/confirm.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();



export async function POST(request: NextRequest, response: NextResponse) {
    const body = await request.json();
    const {id, token, email} = body;


    const newUser = prisma.user.findUnique({
        where: { id : body.data.id}
    })

    if(!body.id || !body.token || !body.email){
        return new NextResponse(' Une erreur est survenue ', {status: 400}); 
    }

  


    console.log("je suis le body", newUser);
}

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
//     // ...vvfconfirmation page UI...*
//     "bonjour"
//   );
// };



// try {
//     const user = { id: "1578", token: "1234" };
//     if (user.id === id && user.token === token) {
//       return true; 
//     }
//   } catch (error) {
//     error;
//   }