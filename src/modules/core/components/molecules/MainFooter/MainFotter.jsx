import React from "react";
import LogoHagalo from "../../../../../assets/img/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import CustomModal from "../coustomModal/CustomModal";

function MainFotter() {
  return (
    <footer className="bg-gray-100 py-8 text-center text-white">
      <div class="w-full min-h-screen flex items-center justify-center bg-gray-300">
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div class="w-full text-5xl font-bold ">
            <h1 class="w-full md:w-2/3 ">Cuéntanos qué necesitas</h1>
          </div>
          <div class="flex mt-8 flex-col md:flex-row md:justify-between">
            <p class="w-full md:w-2/3 text-gray-400">
              Te recomendaremos a los mejores profesionales de confianza
            </p>
            <div class="w-44 pt-6 md:pt-0">
              <CustomModal/>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex mt-24 mb-12 flex-row justify-between items-center">
              <div class="">
                <a
                  className="flex items-center py-5 px-2 text-gray-00 "
                  href="/"
                >
                  <img className="h-9  " src={LogoHagalo} alt="" />
                </a>
              </div>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Nosotros
              </a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Servicios
              </a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Porque nosotros
              </a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Contacto
              </a>
              <div class="flex flex-row space-x-8 items-center justify-between">
                <a
                  href="https://www.instagram.com/harold.jvilla_/"
                  className="text-gray-800"
                >
                  <AiOutlineInstagram />
                </a>
              </div>
            </div>
            <hr class="border-gray-600" />
            <p class="w-full text-center my-12 text-gray-600">
              Hecho con ❤ por Harold
            </p>
            <p class="w-full text-center my-3 text-gray-400 text-sm">
              Copyright © 2022 Hagalo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFotter;
