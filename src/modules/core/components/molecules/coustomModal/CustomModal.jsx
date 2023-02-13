import React, { useState } from "react";
import ReactDOM from "react-dom";

function CustomModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <button
        className="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded w-full lg:w-56"
        onClick={() => setIsOpen(true)}
      >
        Contactanos
      </button>
      {isOpen && (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50">
    
              <span className="text-sm text-gray-800"></span>
            </div>
            
            <div className="modal-content py-4 text-left px-6">
              {/* <!--Title--> */}
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold text-gray-700">Contactanos</p>
              </div>

              {/* <!--Body--> */}
              <div className="modal-body text-gray-700">
                <div className="flex flex-col pt-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-gray-400 p-2 w-full "
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col pt-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="number">Numero celular</label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="border border-gray-400 p-2 w-full"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col pt-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="city">Ciudad</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="border border-gray-400 p-2 w-full"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                </div>
                <div className="flex flex-col pt-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    className="border border-gray-400 p-2 w-full"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
              </div>

              {/* <!--Footer--> */}
              <div className="flex justify-end pt-2">
                <button
                  className="px-4  p-3 rounded-lg  mr-2 inline-flex justify-center  border border-transparent py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={() => setIsOpen(false)}
                >
                  Cerrar
                </button>
                <button
                  className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomModal