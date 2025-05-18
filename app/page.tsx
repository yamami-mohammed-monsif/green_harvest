import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  ssr: true,
});

const Advertisement = dynamic(() => import("@/components/Advertisement"), {
  ssr: true,
});

const Vegetables = dynamic(() => import("@/components/Vegetables"), {
  ssr: true,
});

const Reviews = dynamic(() => import("@/components/Reviews"), {
  ssr: true,
});

const Order = dynamic(() => import("@/components/Order"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Advertisement />
      <Vegetables />
      <Reviews />
      <Order />
    </>
  );
}
