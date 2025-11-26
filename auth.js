import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const { email, password } = credentials;

        if (email === "user@example.com" && password === "pass123") {
          return { id: "1", email };
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
});
