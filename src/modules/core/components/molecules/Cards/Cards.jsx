import React from "react";

//import images
import Pareja from "../../../../../assets/img/houses/KO5P6MUBZBC3NCAGXVK5D4KP4U.jpg";
import Buscar from "../../../../../assets/img/houses/buscar1.jpg";
import Finalizar from "../../../../../assets/img/houses/finalizar.jpg";

function Cards() {
  return (
    <section className="bg-gray-100 min-h-[260px] pb-[55px] lg:-mt-24 pt-40">
      <div className="container mx-auto flex flex-col lg:flex-row gap-x-[32px]">
        {/* card group */}
        <div className="flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[38px] z-10 lg:-mt-[77px] mx-auto">
          {/* card 1 */}
          <div className="bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]">
            {/* card text */}
            <div className="flex items-center mb-[18px] lg:mb-[28px]">
              <h4 className=" text-lg lg:text-2xl lg:leading-7 font-bold text-gray-700 mr-8">
                Crea tu plan para el proyecto
              </h4>
              <h2 className="text-[26px] leading-[36px] lg:text-[50px] lg:leading-[60px] font-bold; text-stroke-2 text-gray-400">
                1
              </h2>
            </div>
            {/* card image */}
            <div>
              <img className="rounded-md" src={Pareja} alt="" />
            </div>
          </div>
          {/* card 2 */}
          <div className="bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]">
            {/* card text */}
            <div className="flex items-center mb-[18px] lg:mb-[28px]">
              <h4 className=" text-lg lg:text-2xl lg:leading-7 font-bold text-gray-700 mr-8">
                Busca y contacta en <span className="text-violet-700">Hágalo. </span>
              </h4>
              <h2 className="text-[26px] leading-[36px] lg:text-[50px] lg:leading-[60px] font-bold; text-stroke-2 text-gray-400">
                2
              </h2>
            </div>
            {/* card image */}
            <div>
              <img className="rounded-md" src={Buscar} alt="" />
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="bg-white w-full flex-1 max-w-[578px] mx-auto p-[14px] lg:p-[26px] mt-2 lg:-mt-[77px] z-10 shadow-2xl rounded-md flex justify-between items-start">
          {/* card text */}
          <div className="max-w-[300px] ">
            <div className="flex items-center mb-4 lg:mb-8">
              <h4 className=" text-lg lg:text-2xl lg:leading-7 font-bold text-gray-700 ">
                Disfruta del proceso y finalización del proyecto
              </h4>
              <h2 className="text-[26px] leading-[36px] lg:text-[50px] lg:leading-[60px] font-bold; text-stroke-2 text-gray-400 ">
                3
              </h2>
            </div>
            <p className="mb-4 lg:mb-3">
              estamos impulsando la industria a través de Hagalo si quieres
              saber mas contactanos
            </p>
            <a href="/" className="text-xs lg:text-sm font-bold uppercase text-violet-700">Saber más</a>
          </div>
          {/* card image */}
          <div>
            <img className="rounded-md" src={Finalizar} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
