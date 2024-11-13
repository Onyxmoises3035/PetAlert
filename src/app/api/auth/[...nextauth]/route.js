import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/db";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text", placeholder: "correo" },
                password: { label: "password", type: "password", placeholder: "contraseña" },
            },
            async authorize(credentials, req) {
                const userFound = await prisma.usuario.findUnique({
                    where: {
                        usu_email: credentials.email
                    }
                })
                if (!userFound) return null;
                 
                if (credentials.password != userFound.usu_password) return null;

                return {
                    id: userFound.usu_id,
                    name: userFound.usu_name,
                    email: userFound.usu_email
                }
            }
        })
    ],
    pages: {signIn: '/petalert'}
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };