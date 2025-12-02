import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials:{
        email: {label:"Email", type:"email"},
        password:{label:"Password", type:"password"}
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if(!user || !user.password) return null
        //   check if the password hash matches
        // check if the the session is created
        const isMatch = await bcrypt.compare(credentials.password, user.password);
        if(!isMatch) return null;

        return{
          id : user.id,
          email: user.email
        }
        

      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: { signIn: "/login" },
  callbacks:{
    async jwt({token,user}){
      if(user){
        token.id = user.id
      }
      return token
    },
    async session({session,token}){
      if(token){
        session.user.id = token.id
      }
      return session
    }
  }
});

export { handler as GET, handler as POST };
