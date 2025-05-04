// this is a required api route for NextAuth
// it handles the authentication process and provides the necessary endpoints for signing in, signing out, and checking session status
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Restrict access to specific users
      const allowedUsers:string[] = process.env.ALLOWED_USERS?.split(',') || [];
      if (allowedUsers.includes(user.email!)) {
        return true;
      } else {
        return "/login/denied"; // Redirect to login page with unauthorized message
      }
    }
  }
});

// exporting the handler() function as both GET and POST methods so either requrest will run handler()
export { handler as GET, handler as POST };