import React, { useState, useEffect, useContext } from "react";

// import icons
import {
  RiHome5Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiMapPinLine,
  RiPaintBrushLine,
} from "react-icons/ri";
import {
  GrUserWorker
} from "react-icons/gr";

// import headless ui
import { Menu } from "@headlessui/react";

// import Services context
import { ServicesContext } from "../ServicesContext/ServicesContext";

function EspecialidadDropdown() {
  const { especialidad, setEspecialidad, especialidades } = useContext(ServicesContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiPaintBrushLine className="dropdown-icon-primary text-violet-700" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {especialidad}
          </div>
          <div className="text-[13px]">Selecciona una especialidad</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {especialidades.map((especialidad, index) => {
          return (
            <Menu.Item
              onClick={() => setEspecialidad(especialidad)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {especialidad}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default EspecialidadDropdown;
