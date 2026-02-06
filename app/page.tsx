import Head from "next/head";
import HeroSection from "../Components/HeroSection";
import Features from "../Components/Features";
import AfterHero from "../Components/AfterHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travelator ✈️ | Premium Travel Experiences</title>
        <meta
          name="description"
          content="Curated luxury travel experiences with personalized itineraries and sustainable practices"
        />
      </Head>
      <HeroSection />
      <AfterHero/>
      <Features/>
    </>
  );
}
