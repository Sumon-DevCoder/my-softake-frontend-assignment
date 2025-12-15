"use client";

import { usePathname } from "next/navigation";
import Navbar from "../../sections/Shared/navbar/Navbar";
import Footer from "../../sections/Shared/footer/Footer";

const ConditionalLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");
  const isSuperHeroRoute = pathname?.startsWith("/super-hero");

  return (
    <>
      {!isAdminRoute && !isSuperHeroRoute && <Navbar />}
      {children}
      {!isAdminRoute && !isSuperHeroRoute && <Footer />}
    </>
  );
};

export default ConditionalLayout;

