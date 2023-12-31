"use client";
import "./globals.css";
import "../scss/app.scss";
import {Inter} from "next/font/google";
import {NextAuthProvider} from "@/app/providers";
import Navbar from "@/components/layouts/navbar/navbar";
import {QueryClient, QueryClientProvider} from "react-query";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    const queryClient = new QueryClient();

    return (
        <html lang="en">
        <body className={inter.className}>
        <div id="root">
            <NextAuthProvider>
                <>
                    <Navbar/>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </>
            </NextAuthProvider>
        </div>
        </body>
        </html>
    );
}
