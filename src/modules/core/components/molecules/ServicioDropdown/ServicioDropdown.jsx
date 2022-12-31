import React, { useState, useEffect, useContext } from "react";

// import icons
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

// import Services context
import { ServicesContext } from "../ServicesContext/ServicesContext";

function ServicioDropdown() {
  const { servicio, setServicio, servicios } = useContext(ServicesContext);


  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{servicio}</div>
          <div className="text-[13px]">Selecciona un servicio</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {servicios.map((servicio, index) => {
          return (
            <Menu.Item
              onClick={() => setServicio(servicio)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {servicio}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default ServicioDropdown;
