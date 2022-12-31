import React, { useState } from "react";
import LogoHagalo from "../../../../../assets/img/logo.png";
import Burguermenu from "../../atoms/Burguermenu";
import { GrUserWorker } from "react-icons/gr";
import { GiScrew } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { BiPhotoAlbum } from "react-icons/bi";
import { BsPatchQuestion } from "react-icons/bs";

function NavMenu() {
  const [nav, setNav] = useState(false);

  const handdleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <a className="flex items-center py-5 px-2 text-gray-700 " href="/">
              <img className="h-9  " src={LogoHagalo} alt="" />
            </a>
          </div>
          {/* primary nav */}
          <div className="hidden md:flex items-center space-x-3  ">
            <a href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Directorio de Profesionales
            </a>
            <a href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">
            Directorio de Distribuidores
            </a>
          </div>
          {/* secundary nav */}
          <div className="hidden md:flex items-center space-x-1 text-gray-700">
            <a href="/" className="py-5 px-3">
              Acceder
            </a>
            <a
              href="/"
              className=" py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded-lg transition duration-300 shadow-md"
            >
              Registrarce
            </a>
          </div>

          {/* mobile button goes here*/}
          <div
            onClick={(handdleClick) => setNav(!nav)}
            className="md:hidden flex items-center"
          >
            <button class="mobile-menu-button">
              <Burguermenu nav={nav} handdleClick={handdleClick} />
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}

      {nav && (
        <div class="md:hidden flex flex-col justify-center items-center w-full absolute bg-white top-24 left-0 shadow-md space-y-6 overflow-hidden transition-all">
          <div className="pb-6">
            <a href="/" className="block py-2 px-8 text-sm">
              Acceder
            </a>
            <a
              href="/"
              className="block shadow-md w-auto px-6 py-2 text-sm bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 "
            >
              Registrarce
            </a>
          </div>
          <div className="flex flex-col items-center space-y-7 pt-4 pb-4 bg-gray-200 w-full">
            <a className="flex items-center" href="/">
              <GrUserWorker />
              <p className="ml-1">Directorio de profesionales</p>
            </a>
            <a href="/" className="flex items-center">
              <GiScrew />
              <p className="ml-1">Directorio de Distribuidores</p>
            </a>
            <a href="/" className="flex items-center">
              <FaHandsHelping />
              <p className="ml-1">Pregunta a la comunidad</p>
            </a>
            <a href="/" className="flex items-center">
              <FcIdea />
              <p className="ml-1">Ideas y proyectos</p>
            </a>
            <a href="/" className="flex items-center">
              <BiPhotoAlbum />
              <p className="ml-1">Galeria de fotos</p>
            </a>
            <a href="/" className="flex items-center">
              <BsPatchQuestion />
              <p className="ml-1">Ayuda</p>
            </a>
          </div>

          <div>
            <button className="block shadow-md w-auto px-6 mt-6 py-2 text-sm bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
              ¿Eres autonomo o Empresa?
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavMenu;
