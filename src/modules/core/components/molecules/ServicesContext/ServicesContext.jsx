import React, { useState, useEffect, createContext } from "react";

//import data
import { servicesData } from "../../../../../data";

//create contexct
export const ServicesContext = createContext();

function ServicesContextProvider({ children }) {
  const [services, setServices] = useState(servicesData);
  const [houses, setHouses] = useState(servicesData);
  const [ciudad, setCiudad] = useState("Ciuadad (any)");
  const [ciudades, setCiudades] = useState([]);
  const [servicio, setServicio] = useState("Servicio (any)");
  const [servicios, setServicios] = useState([]);
  const [especialidad, setEspecialidad] = useState("Especialidad (any)");
  const [especialidades, setEspecialidades] = useState([]);
  const [loading, setLoading] = useState(false);

  // return all ciudades
  useEffect(() => {
    const allCiudades = services.map((services) => {
      return services.ciudad;
    });

    // remove duplicates
    const uniqueCiudades = ["Ciudad (any)", ...new Set(allCiudades)];
    // set ciudades state
    setCiudades(uniqueCiudades);
  }, []);

  // return all servicios
  useEffect(() => {
    const allServicios = services.map((services) => {
      return services.type;
    });

    // remove duplicates
    const uniqueServicios = ["Servicio (any)", ...new Set(allServicios)];
    // set servicios state
    setServicios(uniqueServicios);
  }, []);

  // return all especialidades
  useEffect(() => {
    const allEspecialidades = services.map((services) => {
      return services.especialidad;
    });

    // remove duplicates
    const uniqueEspecialidades = [
      "Especialidad (any)",
      ...new Set(allEspecialidades),
    ];
    // set servicios state
    setEspecialidades(uniqueEspecialidades);
  }, []);

  const handleClick = () => {
    // set loading
    setLoading(true);
    //create a function that checks if the string inclides '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const newServicio = servicesData.filter((service) => {
      //if all values are selected
      if (
        service.ciudad === ciudad &&
        service.type === servicio &&
        service.especialidad === especialidad
      ) {
        return service;
      }

      //if all values are default
      if (isDefault(ciudad) && isDefault(servicio) && isDefault(especialidad)) {
        return service;
      }

      //if ciudad is not default
      if (
        !isDefault(ciudad) &&
        isDefault(servicio) &&
        isDefault(especialidad)
      ) {
        return service.ciudad === ciudad;
      }

      //if servicio is not default
      if (
        !isDefault(servicio) &&
        isDefault(ciudad) &&
        isDefault(especialidad)
      ) {
        return service.type === servicio;
      }

      // if especialidad is not default
      if (
        !isDefault(especialidad) &&
        isDefault(ciudad) &&
        isDefault(servicio)
      ) {
        return service.especialidad === especialidad;
      }

      //if ciudad & servicio is not default
      if (
        !isDefault(ciudad) &&
        !isDefault(servicio) &&
        isDefault(especialidad)
      ) {
        return service.ciudad === ciudad && service.type === servicio;
      }

      // if ciudad and especialidad is not default
      if (
        !isDefault(ciudad) &&
        isDefault(servicio) &&
        !isDefault(especialidad)
      ) {
        return service.ciudad === ciudad;
      }

      //servicio and especialidad is not default
      if (
        isDefault(ciudad) &&
        !isDefault(servicio) &&
        !isDefault(especialidad)
      ) {
        return service.type === servicio;
      }
    });

    setTimeout(() => {
      return (
        newServicio.length < 1 ? setServices([]) : setServices(newServicio),
        setLoading(false)
      );
    });
  };

  return (
    <ServicesContext.Provider
      value={{
        ciudad,
        setCiudad,
        setHouses,
        ciudades,
        servicio,
        setServicio,
        servicios,
        especialidad,
        setEspecialidad,
        especialidades,
        services,
        houses,
        loading,
        handleClick,
        loading,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

export default ServicesContextProvider;
