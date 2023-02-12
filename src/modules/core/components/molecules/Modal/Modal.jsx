import React, { useState } from "react";
import Form from "../FormModal/Form";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" px-[30px] w-full py-6  mx-auto flex flex-col justify-center items-center h-72 m-24 bg-gray-300 ">
      <div className="">
        <h1 className=" text-lg text-gray-800 lg:text-[40px] leading-none mb-6 justify-center text-center">
          ¡Haz realidad tus proyectos de construcción o remodelación con{" "}
          <span className="text-violet-700"> Hagalo </span>! Descubre cómo
          puedes obtener cotizaciones y comparar calidad y precios.
        </h1>
      </div>
      <button
        className="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded w-full lg:w-56"
        onClick={() => setShowModal(true)}
      >
        Obten cotizacion
      </button>
      {showModal && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="">
              <div className="flex flex-col justify-center mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h4 className="text-lg leading-6 font-medium text-gray-900 text-center">
                  Sube tu idea (Render, Plano, foto, Dibujo) y trataremos de
                  darte un presupuesto de diferentes profesionales en esa area
                </h4>
                <div className="mt-2">
                  <Form />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
