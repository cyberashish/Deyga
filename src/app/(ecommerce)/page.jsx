import Image from "next/image";
import HeroSection from "../Components/Home/HeroSection";
import BestSeller from "../Components/Home/BestSeller";
import Testing from "../Components/Home/Testing";
import Combo from "../Components/Home/Combo";
import Founder from "../Components/Home/Founder";
import SixPillars from "../Components/Home/SixPillars";
import PressFeatures from "../Components/Home/PressFeatures";
import Awards from "../Components/Home/Awards";
import StoreLocation from "../Components/Home/StoreLocation";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <BestSeller/>
      <Combo/>
      <Founder/>
      <SixPillars/>
      <PressFeatures/>
      <Awards/>
      <StoreLocation/>
    </>
  );
}
