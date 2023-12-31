import type {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {LoginService} from "@/services/user";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) {
                const {email, password} = credentials;
                const user = await LoginService({email, password});
                if (user.data) {
                    return user.data as any;
                } else {
                    return null;
                }
            }
        })
    ],

    callbacks: {
        jwt: async ({token, user}) => {
            if (user?.user?.user) {
                token.user = user?.user.user;
            } else {
                user && (token.user = user);
            }
            return token;
        },
        async session({session, token}) {
            session.user = token?.user.user; // Setting token in session
            return Promise.resolve(session);
        },
    },
}