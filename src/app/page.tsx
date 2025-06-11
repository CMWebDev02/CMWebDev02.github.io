// Plan:
// Container Divs:
// Introduction/Hero Div
// Sample Project Divs
// Footer with contact and excess info about me.

import HeroContainer from "@/containers/main-page/hero-container";
import IntroContainer from "@/containers/main-page/intro-container";
import PortfolioContainer from "@/containers/main-page/portfolio-container";

export default function Home() {
  return (
    <>    
      <HeroContainer />

      <IntroContainer />

      <PortfolioContainer />
    </>
  );
}
