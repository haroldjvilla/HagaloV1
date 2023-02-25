import React, { useEffect, useState } from "react";
import image1 from "../../../../assets/img/Publicidad/divisiones.jpg";
import image2 from "../../../../assets/img/apartments/a5lg.png";
import image3 from "../../../../assets/img/apartments/a1.png";
import LogoDivisiones from "../../../../assets/img/Publicidad/divisiones.png";
import LogoDivisionesPeque from "../../../../assets/img/Publicidad/divisionesPeque3.jpg";
import { useMediaQuery } from "@react-hook/media-query";

import { BiPhoneCall } from "react-icons/bi";

const imagesData = [
  {
    image: image1,
    imageChortToSlider: LogoDivisionesPeque,
    title: LogoDivisiones,
    description:
      "¡Renueva tu baño hoy mismo! Solicita nuestro servicio de instalación de divisiones de vidrio templado y transforma tu hogar.",
    telefono: "321 634 4064",
  },
  {
    image: image2,
    title: "Imagen 2",
    description: "Esta es la imagen 2",
  },
  {
    image: image3,
    title: "Imagen 3",
    description: "Esta es la imagen 3",
  },
];

const CarouselSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoChange, setAutoChange] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % imagesData.length);
    setAutoChange(false);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? imagesData.length - 1 : currentSlide - 1
    );
    setAutoChange(false);
  };

  useEffect(() => {
    let intervalId;
    if (autoChange) {
      intervalId = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % imagesData.length);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [currentSlide, autoChange, imagesData.length]);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const currentImageData = imagesData[currentSlide];

  const isLargeScreen = useMediaQuery("(min-width: 640px)");

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl text-white hover:text-gray-500 focus:outline-none"
        onClick={handlePrevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl text-white hover:text-gray-500 focus:outline-none"
        onClick={handleNextSlide}
      >
        &gt;
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-4">
        {imagesData.map((image, index) => (
          <div
            key={index}
            className="h-3 w-3 bg-gray-500 rounded-full mx-2 cursor-pointer hover:bg-gray-700"
            onClick={() => {
              setCurrentSlide(index);
              setAutoChange(false);
            }}
          ></div>
        ))}
      </div>

      <div>
        {isLargeScreen ? (
          <img
            className="object-cover h-64 w-full cursor-pointer"
            src={currentImageData.image}
            alt={`Slide ${currentSlide + 1}`}
            onClick={handleImageClick}
          />
        ) : (
          <img
            className="object-cover h-64 w-full cursor-pointer"
            src={currentImageData.imageChortToSlider}
            alt={`Slide ${currentSlide + 1}`}
            onClick={handleImageClick}
          />
        )}
      </div>

      {modalOpen && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div className="bg-white p-4 rounded-md">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="flex flex-col justify-center items-center bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <p className="text-gray-700 text-center">
                {currentImageData.description}
              </p>

              <img
                className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
                src={currentImageData.title}
              ></img>

              <p className="text-center ">
                Si decides llamar ¡recuerda decir que vienes de Hagalo!
              </p>
              <h1 className="flex gap-3 cursor-pointer">
                <BiPhoneCall size={30} /> {currentImageData.telefono}
              </h1>

              <h2 className="text-lg font-bold mb-2"></h2>

              <button
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselSlider;
