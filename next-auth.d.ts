import NextAuth from "next-auth";




declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
        } & Session['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
      [key: string]: {
        accessToken: string | undefined
        refreshToken: string | undefined
      }
    }
  }