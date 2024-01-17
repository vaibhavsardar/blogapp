import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: "41ab02ee2b45d72d8a62",
      clientSecret: "4cfad503ea69d52abdb5e8af8d26e74dec54d709",
    }),
    // GoogleProvider({
    //   clientId: "994949359288-tioi1me46mi6lgv3ldi0g9c5osvsdrku.apps.googleusercontent.com",
    //   clientSecret: "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T"
    // })
  ],
  callbacks: {
    async session({ session, token }) {
      console.log(session, token);

      session.user.name = `${session?.user?.name}_${token?.sub}`;

      return session;
    },
  },
  secret: "default_secret_key",
};


const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };