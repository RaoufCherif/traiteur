"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { prisma } from "@/db";

const schema = object({
  email: string()
    .required("Merci de renseigner votre email! ")
    .email("Adresse email invalide "),
  password: string()
    .required("Merci de renseigner votre mot de passe")
    .min(4, "Le mot de passe doit comporter 8 caractères minimum")
    .max(26),
}).required();

const SignInform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    const { email, password } = data;
  };


  const handlLogIn = async () => {
    const user = await prisma.user.findUnique({ where: { email } });

    try {
      const response = await fetch("api/auth", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
      } else {
        const data = await response.json();
      }
    } catch (error) {
      console.log("Erreur de connexion : ", error);
    }
  };

  try {
  } catch (error: any) {
    setError({ message: error.message });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx("flex flex-col gap-7")}
    >
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="passowrd"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <Controller
				name="email"
				control={control}
				defaultValue=""
				render={({ field }) => (
					<TextField
						{...field}
						id="email"
						type="email"
						variant="standard"
						label="Email"
						placeholder="Entrer votre email"
						className="bg-gray-300 "
						helperText={errors?.email ? errors?.email.message : ""}
						error={errors?.email ? Boolean(true) : Boolean(false)}
						autoComplete="off"
						onChange={(e) => setEmail(e.target.value)}
					/>
				)}
			/> */}

      {/* <Controller
				name="password"
				control={control}
				defaultValue=""
				render={({ field }) => (
					<TextField
						{...field}
						id="password"
						type="password"
						variant="standard"
						label="Mot de passe"
						placeholder="Entrer votre mot de passe"
						className="bg-gray-300 "
						helperText={errors?.password ? errors?.password.message : ""}
						error={errors?.password ? Boolean(true) : Boolean(false)}
						onChange={(e) => setPassword(e.target.value)}
					/>
				)}
			/> */}
      <Button
        type="submit"
        variant="outlined"
        className="mt-4"
        onClick={handlLogIn}
      >
        Connexion
      </Button>
      <Button type="button" variant="outlined" className="mt-4" color="warning">
        Inscription
      </Button>

      <Button
        type="button"
        variant="outlined"
        className="mt-4"
        color="secondary"
      >
        <Link href={"/"}>Accueil</Link>
      </Button>
    </form>
  );
};

export default SignInform;
