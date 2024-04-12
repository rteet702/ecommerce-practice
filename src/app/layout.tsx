import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ecommerce Site",
    description: "Site created and maintained by Robert Teets",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + " flex h-[100svh]"}>
                <Navbar />
                <main className="flex-[10]">{children}</main>
            </body>
        </html>
    );
}
