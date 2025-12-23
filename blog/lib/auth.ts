import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
            return null;
        }

        const user = await prisma.user.findUnique({
            where: {
                email: credentials.email as string
            }
        });

        if (!user) {
            return null;
        }
        
        if (user.password === credentials.password) {
             return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
      async session({ session, token, user }) {
          // With JWT strategy (default for Credentials), user is not passed to session callback, token is.
          // But we need to check if we are using database strategy or jwt.
          // Credentials provider forces JWT strategy.
          if (session.user && token.sub) {
              session.user.id = token.sub;
          }
          return session;
      }
  },
  session: {
      strategy: "jwt"
  }
})
