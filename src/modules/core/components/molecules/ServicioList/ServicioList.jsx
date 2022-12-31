import React, { useContext, useS } from "react";

// import context
import { ServicesContext } from "../ServicesContext/ServicesContext";

// import components
import Profesional from "../Profesional/Profesional";
import House from "../House/House";


// import link
import { Link } from "react-router-dom";

// import icons
import { ImSpinner2 } from "react-icons/im";

function ServicioList() {
  const { services, loading } = useContext(ServicesContext);

  // if loading is true
  if (loading) {
    return (<ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]"/>)
  }
  

  if (services.length < 1) {
    return <div className="text-center text-3xl text-gray-400 mt-48">Lo sientimos, no encontramos nada</div>
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {services.map((services, index) => {
            return (
              <Link to={`/detalle_servicio/${services.id}`} key={index}>
                <House house={services} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicioList;
