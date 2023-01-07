import React from "react";
import Banner from "../components/molecules/Banner/Banner";
import Cards from "../components/molecules/Cards/Cards";
import ImagaSlider from "../components/molecules/ImagaSlider/ImagaSlider";
import ServicioList from "../components/molecules/ServicioList/ServicioList";
import Testimonios from "../components/molecules/Testimonios/Testimonios";

function HomePage() {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <ServicioList />
      <Testimonios/>
      <Cards/>
      

    </div>
  );
}

export default HomePage;
