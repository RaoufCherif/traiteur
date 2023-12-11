
// import NextAuth, { DefaultSession } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";
// import Providers from "next-auth/providers";
// import { PrismaClient } from "@prisma/client";
// import CredentialsProvider from "next-auth/providers/credentials";



// const prisma = new PrismaClient();





// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: { type: "text", placeholder: "test@test.com" },
//         password: { type: "text", placeholder: "Pa$$w0rd" },
//       },
//       async authorize(credentials: any, req: any) {
//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });
//         if (user && user.password === credentials.password) {
//           return Promise.resolve(user);
//         } else {
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/signIn",
//     signOut: "/signOut",
//     error: "auth/error",
//     verifyRequest: "auth/verify-request",
//   },
//   callbacks: {
//     // session: async (session: { user: { id: any } }, user: { id: any }) => {
//       session.user.id = user.id;
//       return Promise.resolve(session);
//     },
//   },
// });
// // export default async function handler(req: any, res: any) {

// //   console.log("*********************************")
// //   if (req.method !== "POST") {
// //     return res.status(405).end();
// //   }

// //   const { email, password } = req.body;

//   // const user = await prisma.user.findUnique({ where: { email } });

// //   if (!user || user.password !== password) {
// //     return res.status(401).json({ error: "Emeil ou mot de passe incorrect" });

// //     console.log("filicitation vous êtes loguer!");

// //     res.status(200).json({ message: "Connexion avec succès!" });
// //   }
// // }

// // const handler = NextAuth ({
// // providers: [
// //     // GoogleProvider({
// //     //     clientId: process?.env?.GOOGLE_CLIENT_ID ?? "",
// //     //     clientSecret: process?.env?.GOOGLE_CLIENT_SECRET ?? "",
// //     // }),
// //         GitHubProvider({
// //           clientId: process?.env?.GITHUB_ID ?? "",
// //           clientSecret: process?.env?.GITHUB_SECRET ?? ""
// //         }),
// //         Providers.Credentials({
// //           async authorize(credentials) {
// //           }

// //         })
// // ],

// // });

// // export { handler as GET, handler as POST};
