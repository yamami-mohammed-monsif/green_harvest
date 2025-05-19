"use client";

import dynamic from "next/dynamic";
import LazySection from "@/components/utils/LazyLoadSection";

const Advertisement = dynamic(() => import("@/components/Advertisement"), {
  ssr: false,
});

const Vegetables = dynamic(() => import("@/components/Vegetables"), {
  ssr: false,
});

const Reviews = dynamic(() => import("@/components/Reviews"), {
  ssr: false,
});

const Order = dynamic(() => import("@/components/Order"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const ClientSections = () => {
  return (
    <>
      <LazySection>
        <Advertisement />
      </LazySection>
      <LazySection>
        <Vegetables />
      </LazySection>
      <LazySection>
        <Reviews />
      </LazySection>
      <LazySection>
        <Order />
      </LazySection>
      <LazySection>
        <Footer />
      </LazySection>
    </>
  );
};

export default ClientSections;
