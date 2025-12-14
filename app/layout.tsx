import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "../sections/Shared/footer/Footer";
import Navbar from "../sections/Shared/navbar/Navbar";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MY SOFTAKE",
  icons: {
    icon: "/logo.ico",
  },
  description:
    "MY SOFTAKE is a software company that provides software development services to businesses and individuals",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
        suppressHydrationWarning
        data-theme="light"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
