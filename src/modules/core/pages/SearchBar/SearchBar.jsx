import React, { useContext } from "react";
import CiudadDropdown from "../../components/molecules/CiudadDropdown/CiudadDropdown";
import Ferrreterias from "../../components/molecules/EspecialidadDropdown/EspecialidadDropdown";
import LaborDropdown from "../../components/molecules/ServicioDropdown/ServicioDropdown";

import EspecialidadDropdown from "../../components/molecules/EspecialidadDropdown/EspecialidadDropdown";
import ServicioDropdown from "../../components/molecules/ServicioDropdown/ServicioDropdown";

import { Link } from "react-router-dom";

// import components

//import icons
import { RiSearch2Line } from "react-icons/ri";

// import context
import { ServicesContext } from "../../components/molecules/ServicesContext/ServicesContext";

function SearchBar() {
  const { handleClick } = useContext(ServicesContext);
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CiudadDropdown />
      <ServicioDropdown />
      <EspecialidadDropdown />
      <Link to={`/resultado_busqueda/`}>
        
        <button
          onClick={() => handleClick()}
          className="bg-violet-700 hover:bg-violet-800 transition w-full lg:w-56 h-16 rounded-lg flex justify-center items-center text-white text-lg"
        >
          <RiSearch2Line />
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
