import React from "react";
import Banner from "../components/molecules/Banner/Banner";
import Cards from "../components/molecules/Cards/Cards";
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
      <Cards/>
      <Testimonios/>

      

    </div>
  );
}

export default HomePage;
