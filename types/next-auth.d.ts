declare module "next-auth-user-session" {
    interface Session {
      user?: User;
      token?: string;
      error?: string;
      refreshTocken?: string;
    }
  
    interface MyUser {
      nom?: string;
      prenom?: string;
      email?: string;
  
    }
  }
  