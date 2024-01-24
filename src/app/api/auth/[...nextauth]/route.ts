import { PrismaClient, User } from "@prisma/client";
import NextAuth, { Account, Profile } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { MyUser } from "next-auth-user-session";
import { Session } from "next-auth";

import { NextAuthOptions } from "next-auth";

import { JWT } from "next-auth/jwt";
import email from "next-auth/providers/email";




const prisma = new PrismaClient();

console.log(prisma.user.findUnique({ where: { email: "545454" } }));

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email : ", type: "email", placeholder: "Email..." },
        password: {
          label: "Password : ",
          type: "password",
          placeholder: "Password... ",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        console.log("**************************************");
        const dbUser = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!dbUser) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          dbUser?.password,
        );

        if (!passwordMatch) {
          return null;
        }
        console.log(dbUser);
        return {
          id: dbUser.id + "",
          email: dbUser.email,
          nom: dbUser.nom,
          prenom: dbUser.prenom,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
  
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          nom: token.nom,
          prenom: token.prenom
        },
      };
    },

    async jwt({
      token,
      user,
      account,
      profile,

    }: any ) {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          nom: u.nom,
          prenom: u.prenom
        };
      }
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
