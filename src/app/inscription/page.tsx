"use client"
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import inscriptionImage from "../../../public/logo.png";
import clsx from "clsx";
import { signIn } from "next-auth/react";
import email from "next-auth/providers/email";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";


 
 function Inscription() {
  const router = useRouter();
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password:"",
  })
  const baseUrl = "http://localhost:3000/";

  const registerUser =async (e : {preventDefault: () => void} ) => {
    e.preventDefault();
    const response = await fetch(baseUrl + "api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data })
    });  

    // const userInfo = response.json();

    setData({
      nom: "",
      prenom: "",
      email: "",
      password:"",
    })
    router.push('/signIn');
  }

  return (

      <div className="flex flex-raw  justify-center  itmes-center   h-screen   bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800   ">
        <section
          id="inscription"
          className="flex flex-col gap-4 w-1/2 p-8 justify-center items-center   "
        >
          <div className="flex min-h-full flex-col justify-center  pb-8 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
              <h2 className="my-2 text-center text-2xl font-bold leading-9 tracking-tight text-blue-700 ">
                Inscrivez-vous
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={registerUser}
                className={clsx("flex flex-col gap-3")}
              >
                <label
                 htmlFor="nom"
                 className="block text-sm font-medium leading-6 text-blue-700"
                >Nom :</label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  value={data.nom}
                  onChange={(e) => {setData({ ...data, nom: e.target.value})}}
                  placeholder="Entrer votre nom"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />

                <label
                    htmlFor="prenom"
                    className="block text-sm font-medium leading-6 text-blue-700"
                >Prénom :</label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  value={data.prenom}
                  onChange={(e) => {setData({ ...data, prenom: e.target.value})}}
                  placeholder="Entrer votre prénom"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  required
                />
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-blue-700"
                >Email :</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={(e) => {setData({ ...data, email: e.target.value})}}
                  placeholder="Entrer votre email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  required
                />
                <label     htmlFor="password"
                 className="block text-sm font-medium leading-6 text-blue-700">Mot de passe :</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={data.password}
                  onChange={(e) => {setData({...data, password: e.target.value})}}
                  placeholder="Entrer votre mot de passe"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  required
                />
                <div className="flex flex-raw gap-2 justify-center justify-between">
                  <button type="submit"  
                  className="flex w-1/2 pt-1 justify-center rounded-md bg-indigo-600  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
                    S&apos;inscrire
                  </button>

                  <button
                    type="button"
                
                    className="flex w-1/2 justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"

                    color="warning"
                  >
                    <Link href="/">Annuler</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Image
          id="image_rice"
          src={inscriptionImage}
          alt="background image"
          className="w-1/2  "
        />
      </div>
    
  );
}

export default Inscription;
