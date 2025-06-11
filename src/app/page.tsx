// Plan:
// Container Divs:
// Introduction/Hero Div
// Sample Project Divs
// Footer with contact and excess info about me.

import CardContainer from "@/components/client/card-container";
import HeroContainer from "@/containers/main-page/hero-container";
import IntroContainer from "@/containers/main-page/intro-container";

export default function Home() {
  return (
    <>    
      <HeroContainer />

      <IntroContainer />

      <CardContainer
        title="My Portfolio"
        description="Some of my personal favorite projects."
        links={[{ linkName: "Portfolio", href: { href: "/" } }]}
      >
        <div>
          <h2>Project One</h2>
        </div>
        <div>
          <h2>Project Two</h2>
        </div>
      </CardContainer>
    </>
  );
}
