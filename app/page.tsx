import Head from "next/head";
import HeroSection from "@/components/Herosection";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import AfterHero from "@/components/AfterHero";
import DestinationTeaser from "@/components/DestinationTeaser";

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
