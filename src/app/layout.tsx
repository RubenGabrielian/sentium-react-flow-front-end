"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@/app/providers";
import Navbar from "@/components/layouts/navbar/navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import StyledComponentsRegistry from "../lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">
          <NextAuthProvider>
            <>
              <Navbar />
              <StyledComponentsRegistry>
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </StyledComponentsRegistry>
            </>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
