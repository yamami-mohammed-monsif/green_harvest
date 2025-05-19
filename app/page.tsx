import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ClientSections from "./ClientSectoins";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <ClientSections />
    </>
  );
}
