import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import ConditionalLayout from "../components/common/ConditionalLayout";
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
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
};

export default RootLayout;
