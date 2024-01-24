// import { Button } from "@mui/material";
// import Link from "next/link";
// import clsx from "clsx";
// import React from "react";
// import { prisma } from "@/db";
// import bcrypt from "bcrypt";
// import Image from "next/image";

// import { userAgent } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import casrole_percil from "../../../../public/casrole_percil.jpg";

// const prismaClient = new PrismaClient();

// async function createUser(data: FormData) {
//   "use server";

//   const nom = data.get("nom")?.valueOf();
//   const prenom = data.get("prenom")?.valueOf();
//   const email = data.get("email")?.valueOf();
//   const password = data.get("password")?.valueOf();

//   if (typeof nom !== "string" || nom.length === 0) {
//     throw new Error("Format incorrect!");
//   }

//   const saltRounds = 10;

//   const hashPassword = async (mdp: any) => {
//     try {
//       const hash = await bcrypt.hash(mdp, saltRounds);
//       return hash;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const hp = await hashPassword(password);

//   prisma.user.findUnique({ where: { email } });

//   await prisma.user.create({
//     data: { nom: nom, prenom: prenom, email: email, password: hp },
//   });
// }

// async function SignUpForm() {
//   return (
//     <main className="flex flex-raw    h-screen">
//       <section className="w-1/2 flex flex-col justify-center items-center ">
//         <form action={createUser} className={clsx("flex flex-col gap-3")}>
//           <label>Nom :</label>
//           <input
//             type="text"
//             name="nom"
//             id="nom"
//             placeholder="Entrer votre nom"
//             className={clsx(
//               "border-transparent border-b-amber-900 bg-transparent text-white",
//               " hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700",
//               " hover:border-transparent  ",
//               "placeholder:text-gray-500",
//             )}
//             required
//           />

//           <label>Prénom :</label>
//           <input
//             type="text"
//             name="prenom"
//             id="prenom"
//             placeholder="Entrer votre prénom"
//             className={clsx(
//               "placeholder:text-gray-500",
//               "border-transparent border-b-amber-900 bg-transparent text-white",
//               " hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700",
//               " hover:border-transparent  ",
//             )}
//             required
//           />
//           <label>Email :</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Entrer votre email"
//             className={clsx(
//               "border-transparent border-b-amber-900 bg-transparent text-white",
//               " hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700",
//               " hover:border-transparent  ",
//               "placeholder:text-gray-500",
//             )}
//             required
//           />
//           <label>Mot de passe :</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="Entrer votre mot de passe"
//             className={clsx(
//               "border-transparent border-b-amber-900 bg-transparent text-white",
//               " hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700",
//               " hover:border-transparent  ",
//               "placeholder:text-gray-500",
//             )}
//             required
//           />
//           <div className="flex flex-raw gap-2 justify-center justify-between">
//             <Button type="submit" variant="outlined" className="mt-4">
//               Inscrire
//             </Button>

//             <Button
//               type="submit"
//               variant="outlined"
//               className="mt-4 "
//               color="warning"
//             >
//               <Link href="/">Annuler</Link>
//             </Button>
//           </div>
//         </form>
//       </section>

//       <section className="w-2/3 ">
//         <Image src={casrole_percil} alt="background image" className="h-screen"/>
//       </section>
//     </main>
//   );
// }

// export default SignUpForm;
