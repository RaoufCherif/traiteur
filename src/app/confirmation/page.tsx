"use client";
import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";
import { MailService } from "@sendgrid/mail";

function  ConfirmEmail() {
  const [id, setId]: any = useState("");
  const [token, setToken]: any = useState("");
  const [email, setEmail]: any = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setId(query.get("id"));
    setToken(query.get("token"));
    setEmail(query.get("email"));
  }, []);


  const data = {
    id,
    token,
    email,
  }

  const confirmUser = async () => {

    const response = await fetch(process.env.BASE_URL + "/api/auth/confirmEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
  
  

  };

  return (
    <main className=" h-screen flex flex-col justify-center gap-4 items-center   ">
      <form onSubmit={confirmUser}>
        <h1>Votre ID c&apos;est :  {id}</h1>
        <h1>Votre Token c&apos;est : {token}</h1>
        <h1>Votre Email c&apos;est : {email}</h1>

        <button
          type="submit"
          className="bg-blue-700 text-white p-2 rounded-md "
        >
          <h1>Confirmer votre email !</h1>
        </button>
      </form>
    </main>
  );
}

export default ConfirmEmail;

