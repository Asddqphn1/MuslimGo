import AboutSection from "./AboutSection";
import AsmaulHusna from "./AsmaulHusna";
import DoaSection from "./DoaSection";
import FooterSection from "./FooterSection";
import HeaderNav from "./HeaderNav";

import HeroSection from "./HeroSection";
import SholatSection from "./SholatSection";

function Home() {
  return (
    <>
      <div className="bg-[url(./src/assets/home-bg.jpg)]  text-white bg-repeat">
        <HeaderNav/>
        <HeroSection />
        <SholatSection />
        <AboutSection />
        <DoaSection />
        <AsmaulHusna />
      </div>
      <FooterSection/>
    </>
  );
}

export default Home;
