import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Populations from "@/components/Populations";
import News from "@/components/News";
import Campuses from "@/components/Campuses";
import Footer from "@/components/Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <main className=" w-full flex flex-col justify-center items-center">
        <Hero />
        <Populations />
        <News />
        <Campuses />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
