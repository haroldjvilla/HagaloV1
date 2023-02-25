import React from "react";
import CarouselSlider from "../components/Ad/Ad";
import Banner from "../components/molecules/Banner/Banner";
import Cards from "../components/molecules/Cards/Cards";
import HagaloSection from "../components/molecules/Indicacion/Indicacion";
import Modal from "../components/molecules/Modal/Modal";
import ServicioList from "../components/molecules/ServicioList/ServicioList";
import Testimonios from "../components/molecules/Testimonios/Testimonios";
import SearchBar from "./SearchBar/SearchBar";

function HomePage() {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <SearchBar/>
      <Modal/>
      
      {/* <ServicioList /> */}
      {/* <Cards/>
      <Testimonios/> */}
      <HagaloSection/>
      <CarouselSlider/>

      

    </div>
  );
}

export default HomePage;
