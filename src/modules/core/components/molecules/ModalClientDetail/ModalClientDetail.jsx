import React, { useState } from "react";
import ModalClientDetailInsade from "./ModalClientDetailInsade/ModalClientDetailInsade";

const ModalClientDetail = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Ver teléfono
      </button>
      {showModal && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <ModalClientDetailInsade/>
                </h3>
                <div className="mt-52">
                  <p className="text-sm leading-5 text-gray-500 text-center">
                  Hagalo no será responsable de cualquier tipo de daño o perjuicio causado por el uso inadecuado de los números de contacto compartidos a través de la plataforma. Cualquier uso indebido o inapropiado de los números de contacto compartidos a través de la plataforma será considerado un incumplimiento de los <span className="font-semibold cursor-pointer">términos y condiciones</span>  de Hagalo y dará lugar a medidas legales y/o la terminación inmediata del usuario en cuestión.
                  </p>
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
    </>
  );
};

export default ModalClientDetail;
