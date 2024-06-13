import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";


const handler = NextAuth({
  providers: [
   
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password:{}
      },
      async authorize(credentials) {
        
        try {
          console.log(credentials)
          const response = await axios.post("http://localhost:3000/api/login",credentials);
          console.log(response)

          if (response.status === 200) {
            const {id,email,name,type} = response.data.data;
            const user = {
                id,email,name,type
              };
              return user
          } else {
            return (null); 
          }
        } catch (error) {
          console.error("Error occurred during sign-in:", error);
          return (null); 
        }
      },
    })
  ],
  callbacks: {
    async jwt({ token, user ,session }) {
      // console.log("jwtttt",token,user,session)
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.type = user.type;
      
      }
      return token;
    },
    async session({ session, token ,user }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.type = token.type;
      // console.log("sessionssss",session,token,user)
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
 
 
});

export { handler as GET, handler as POST };
