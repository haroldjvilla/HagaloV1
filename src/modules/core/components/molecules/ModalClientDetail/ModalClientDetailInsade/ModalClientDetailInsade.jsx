import React from "react";
import { BiPhoneCall } from "react-icons/bi";

//import data
import { servicesData } from "../../../../../../data";

//import use params
import { useParams } from "react-router-dom";

function ModalClientDetailInsade() {
  //get the services id
  const { id } = useParams();
  console.log(id);
  //get the servicio based on the id
  const services = servicesData.find((services) => {
    return services.id === parseInt(id);
  });

  return (
    <div>
      <div className="flex flex-col justify-center items-center px-4 pb-4 gap-7">
        <h1 className="p-4">Contacta con {services.name}</h1>
        <p className="text-center ">Si decides llamar ¡recuerda decir que vienes de Hagalo!</p>
        <h1 className="flex gap-3">
          <BiPhoneCall size={30} /> {services.telefono}
        </h1>
      </div>
    </div>
  );
}

export default ModalClientDetailInsade;
