import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

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
    return (
        <html lang="en" data-theme="light">
            <body
                className={`${inter.className} min-h-screen bg-no-repeat bg-cover bg-center`}
                style={
                    {
                        // backgroundImage: `url('./site-bg.gif')`,
                    }
                }
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
