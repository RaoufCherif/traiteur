import { Button } from "@mui/material";
import Link from "next/link";
import clsx from "clsx";
import React from "react";
import { prisma } from "@/db";

async function createUser(e :any ,  data: FormData) {
  e.preventDefault();
  "use server";
  const nom = data.get("nom")?.valueOf();
  const prenom = data.get("prenom")?.valueOf();
  const email = data.get("email")?.valueOf();
  const password = data.get("password")?.valueOf();

  if (typeof nom !== "string" || nom.length === 0) {
    throw new Error("Format incorrect!");
  }
  console.log("**********************************");

  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: 1
  //   },

  // });

  await prisma.user.create({
    data: { nom: nom, prenom: prenom, email: email, password: password },
  });
  console.log("===============================");
}

async function SignUpForm() {
  return (
    <form action={createUser} className={clsx("flex flex-col gap-3")}>
      <label>Nom :</label>
      <input
        type="text"
        name="nom"
        id="nom"
        className="border-inherit border-b-amber-900"
        required
      />

      <label>Prenom :</label>
      <input
        type="text"
        name="prenom"
        id="prenom"
        className="border-inherit border-b-amber-900"
        required
      />
      <label>Email :</label>
      <input
        type="email"
        name="email"
        id="email"
        className="border-inherit border-b-amber-900"
        required
      />
      <label>Mot de passe :</label>
      <input
        type="password"
        name="password"
        id="password"
        className="border-inherit border-b-amber-900"
        required
      />
      <div className="flex flex-raw gap-2 justify-center justify-between">
        <Button type="submit" variant="outlined" className="mt-4">
          Inscrire
        </Button>

        <Button
          type="submit"
          variant="outlined"
          className="mt-4"
          color="warning"
        >
          <Link href="/">Annuler</Link>
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
