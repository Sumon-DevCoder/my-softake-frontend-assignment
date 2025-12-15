import SuperHeroNavbar from "../../sections/SuperHero/navbar/SuperHeroNavbar";
import SuperHeroSection from "../../sections/SuperHero/heroSection/SuperHeroSection";

const SuperHeroPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <SuperHeroNavbar />
      <SuperHeroSection />
    </main>
  );
};

export default SuperHeroPage;

