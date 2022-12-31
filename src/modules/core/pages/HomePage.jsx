import React from "react";
import Banner from "../components/molecules/Banner/Banner";
import Cards from "../components/molecules/Cards/Cards";
import Testimonios from "../components/molecules/Testimonios/Testimonios";

function HomePage() {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <Cards/>
      <Testimonios/>
      

    </div>
  );
}

export default HomePage;
