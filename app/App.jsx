import ExploreBusiness from "@/container/exploreBusiness/ExploreBusiness";
import FeaturedLocalBusiness from "@/container/featuredLocalBusiness/FeaturedLocalBusiness";
import Hero from "@/container/hero/Hero";
import VerifiedBusinesses from "@/container/verifiedBusinesses/VerifiedBusinesses";
import React from "react";

export default function App() {
  return (
    <>
      <Hero />
      <FeaturedLocalBusiness />
      <VerifiedBusinesses />
      <ExploreBusiness />
    </>
  );
}
