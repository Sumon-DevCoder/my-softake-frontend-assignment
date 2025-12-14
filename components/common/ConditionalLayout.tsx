"use client";

import { usePathname } from "next/navigation";
import Navbar from "../../sections/Shared/navbar/Navbar";
import Footer from "../../sections/Shared/footer/Footer";

const ConditionalLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default ConditionalLayout;

