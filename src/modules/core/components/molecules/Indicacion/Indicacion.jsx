import React from "react";
// import images
import Cel from "../../../../../assets/img/mobile.png"
import Call from "../../../../../assets/img/call_center.png"
import Deal from "../../../../../assets/img/greetings.png"

const HagaloSection = () => {
  return (
    <div className="bg-gray-200 py-12 items-center text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Empieza con Hagalo en 3 pasos
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg ">
            <img
              src={Cel}
              alt="Paso 1"
              className="h-48 object-cover text-center items-center justify-center inline"
            />
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">1.</h3>
              <p className="mt-2 text-md text-gray-700">
                Encuentra a alguien o sube tu proyecto para obtener una
                cotización
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <img
              src={Call}
              alt="Paso 2"
              className="h-48 object-cover text-center items-center justify-center inline"
            />
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">2.</h3>
              <p className="mt-2 text-md text-gray-700">
                Hagalo buscará cotizaciones de diferentes empresas
                especializadas y te las enviaremos lo antes posible.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <img
              src={Deal}
              alt="Paso 3"
              className="h-48 object-cover text-center items-center justify-center inline"
            />
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">3.</h3>
              <p className="mt-2 text-md text-gray-700">
              Podrás comparar las cotizaciones y ver perfiles de empresas que las ofrecen, con fotos de sus trabajos anteriores. Así podrás tomar una decisión informada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HagaloSection;
