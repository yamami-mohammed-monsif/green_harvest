import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  ssr: true,
});

const Advertisement = dynamic(() => import("@/components/Advertisement"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Advertisement />
    </>
  );
}
