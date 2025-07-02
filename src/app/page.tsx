import HeroContainer from "@/containers/main-page/hero-container";
import PortfolioContainer from "@/containers/main-page/portfolio-container";

export default function Home() {
  return (
    <main className="bg-blue-300 w-full h-full flex flex-col gap-5 justify-around items-center overflow-auto p-3">
      <HeroContainer />

      <PortfolioContainer />
    </main>
  );
}
