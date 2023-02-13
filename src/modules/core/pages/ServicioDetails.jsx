import React, { useState } from "react";

//import data
import { servicesData } from "../../../data";

//import use params
import { useParams } from "react-router-dom";

//import icons
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

//import link
import { Link } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";
import ModalClientDetail from "../components/molecules/ModalClientDetail/ModalClientDetail";

function ServicioDetails() {
  //get the services id
  const { id } = useParams();
  console.log(id);
  //get the servicio based on the id
  const services = servicesData.find((services) => {
    return services.id === parseInt(id);
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? services.imageSlider.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastslide = currentIndex === services.imageSlider.length - 1;
    const newIndex = isLastslide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  console.log(currentIndex);
  console.log();

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
              {/* imageslider */}
              <div className="max-w-[1400px] h-auto w-full m-auto py-6 px-4 relative group sm:h-auto ">
                <div className="w-full h-full rounded-2xl bg-center bg-cover transition duration-500">
                  <img
                    src={services.imageSlider[currentIndex].url}
                    className="w-full h-full rounded-2xl bg-center bg-contain transition duration-500"
                    alt=""
                  />
                </div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

                <div className="flex top-4 justify-center py-2">
                  {services.imageSlider.map((slide, slideIndex) => (
                    <div
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                      className="text-2xl cursor-pointer"
                    >
                      <RxDotFilled />
                    </div>
                  ))}
                </div>
              </div>
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
                <ModalClientDetail/>
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
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Mensaje"
                defaultValue="Hola Estoy interesado en realizar con ustedes un proyecto"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                  Enviar mensaje
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicioDetails;
