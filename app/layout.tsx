import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shwee: Portfolio",
  description: "A personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/portfolio_icon.png" />
      </head>
      <body className={`${inter.className} max-w-screen-3xl bg-black mx-auto`}>
        {children}
      </body>
    </html>
  );
}
