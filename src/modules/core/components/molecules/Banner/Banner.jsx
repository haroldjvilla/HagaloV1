import React from "react";


// import image
import Pareja from "../../../../../assets/img/pareja-banner1.png";
import SearchBar from "../../../pages/SearchBar/SearchBar";
import { hover } from "@testing-library/user-event/dist/hover";

function Banner() {
  return (
    <section className="h-full max-h-[640px] bg-gradient-to-t from-[#f6f9fc] to-gray-300">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl text-gray-800 lg:text-[58px] font-semibold leading-none mb-6">
            Busca quién te<span className="text-violet-700"> Haga </span> tus mejores proyectos.
          </h1>
        </div>
        {/* img */}
        <div className="hidden flex-1 md:flex justify-end items-end">
            <img className=" rounded-tl-[400px]" src={Pareja} alt="" />
        </div>
      </div>
      {/* <SearchBar/> */}
    </section>
  );
}

export default Banner;
