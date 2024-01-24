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


 
export function Inscription() {
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
    <div className="bg-slate-100">
      <div className="flex flex-raw  justify-center  itmes-center   h-screen      ">
        <section
          id="inscription"
          className="flex flex-col gap-4 w-1/2 p-8 justify-center items-center  bg-gradient-to-r  from-orange-200 to-orange-100  "
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
                <label>Nom :</label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  value={data.nom}
                  onChange={(e) => {setData({ ...data, nom: e.target.value})}}
                  placeholder="Entrer votre nom"
                  className={clsx(
                    "border-transparent border-b-amber-900 bg-transparent text-white",
                    " hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700",
                    " hover:border-transparent  ",
                    "placeholder:text-gray-500",
                  )}
                  required
                />

                <label>Prénom :</label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  value={data.prenom}
                  onChange={(e) => {setData({ ...data, prenom: e.target.value})}}
                  placeholder="Entrer votre prénom"
                  className={clsx(
                    "placeholder:text-gray-500",
                    "border-transparent border-b-amber-900 bg-transparent text-white",
                    " hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700",
                    " hover:border-transparent  ",
                  )}
                  required
                />
                <label>Email :</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={(e) => {setData({ ...data, email: e.target.value})}}
                  placeholder="Entrer votre email"
                  className={clsx(
                    "border-transparent border-b-amber-900 bg-transparent text-white",
                    " hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700",
                    " hover:border-transparent  ",
                    "placeholder:text-gray-500",
                  )}
                  required
                />
                <label>Mot de passe :</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={data.password}
                  onChange={(e) => {setData({...data, password: e.target.value})}}
                  placeholder="Entrer votre mot de passe"
                  className={clsx(
                    "border-transparent border-b-amber-900 bg-transparent text-white",
                    " hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700",
                    " hover:border-transparent  ",
                    "placeholder:text-gray-500",
                  )}
                  required
                />
                <div className="flex flex-raw gap-2 justify-center justify-between">
                  <Button type="submit" variant="outlined" className="mt-4">
                    S&apos;inscrire
                  </Button>

                  <Button
                    type="submit"
                    variant="outlined"
                    className="mt-4 "
                    color="warning"
                  >
                    <Link href="/">Annuler</Link>
                  </Button>
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
    </div>
  );
}

export default Inscription;
