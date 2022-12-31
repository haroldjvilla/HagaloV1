import React from "react";

//import data
import { servicesData } from "../../../data";

//import use params
import { useParams } from "react-router-dom";

//import icons
import { BiBed, BiBath } from "react-icons/bi";

//import link
import { Link } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";

function ServicioDetails() {
  //get the services id
  const { id } = useParams();
  console.log(id);
  //get the servicio based on the id
  const services = servicesData.find((services) => {
    return services.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14 mt-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{services.name}</h2>
            <h3 className="text-lg mb-4">{services.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-[#ff566f] text-white px-3 rounded-full">
              {services.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {services.ciudad}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600">
            {services.especialidad}
          </div>
        </div>
        <div className="flex text-center">
          <p className="text-xl text-gray-800 lg:text-md font-semibold leading-none mb-6">
            {}
          </p>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-2">
              <img src={services.imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 mb-6">
              <div className="flex gap-x-2 items-center">
                <FcLikePlaceholder className="text-3xl" />
                <div className="text-violet-700">16</div>
              </div>
            </div>
            <div>{services.description}</div>
          </div>
          <div className="flex-1 bg-gray-100 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-auto h-auto p-1   ">
                <img src={services.agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg">{services.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  Telefono
                </Link>
              </div>
            </div>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Nombre*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Correo Electronico*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Telefono*"
              />
              <textarea className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400" placeholder="Mensaje" defaultValue='Hola Estoy interesado en realizar con ustedes un proyecto'></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">Enviar mensaje</button>
                <button className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition">Llamada</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicioDetails;
