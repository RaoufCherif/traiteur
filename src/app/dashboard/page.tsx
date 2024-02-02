"use client";
import React from "react";
import { Session } from "next-auth-user-session";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { NextApiRequest } from "next";

const Dashboard = (req: NextApiRequest) => {
  const nom = 1233 
  req.query.nom = "1234"

  const { data: session, status } = useSession();


  return (
    <main>
      <p>Bonjour</p>

      {status === "authenticated" ? (
        <section className=" flex  flex-col m-48 gap-6 items-center">
          <div>
            <h1 className=" fle text-pink-400  ">Votre dashboard</h1>
          </div>

          <div className=" flex flex-col w-fit p-4 bg-amber-200 gap-2 ">
            <p> Signed in as : {session.user.email}</p>
            <p>Id : {session.user.id} </p>
            <p>Nom : {session.user.nom}</p>
            <p>Prenom : {session.user.prenom}</p>
          </div>
    

          <Link
          href="confirmation?nom=1234"
            className="bg-blue-500 p-2 text-white rounded-md"
          >
            {" "}
            Confirm
            </Link>
          
        </section>
      ) : (
        <p> Vous êtes pas connecter</p>
      )}
    </main>
  );
};



export default Dashboard;
