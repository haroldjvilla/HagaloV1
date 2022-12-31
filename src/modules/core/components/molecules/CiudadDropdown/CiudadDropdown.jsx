import React, { useState, useEffect, useContext } from "react";

// import icons
import { RiArrowDownSLine, RiArrowUpSLine, RiMapPinLine } from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

// import Services context
import { ServicesContext } from "../ServicesContext/ServicesContext";

function CiudadDropdown() {
  const { ciudad, setCiudad, ciudades } = useContext(ServicesContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{ciudad}</div>
          <div className="text-[13px]">Selecciona una ciudad</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {ciudades.map((ciudad, index) => {
          return (
            <Menu.Item
              onClick={() => setCiudad(ciudad)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {ciudad}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default CiudadDropdown;
