import React from "react";
import NavMenu from "./modules/core/components/molecules/NavMenu/NavMenu";

//import routes and route

import { Routes, Route } from "react-router-dom";

// import components
import MainFooter from "./modules/core/components/molecules/MainFooter/MainFotter";

//import pages
import HomePage from "./modules/core/pages/HomePage";
import ServicioDetails from "./modules/core/pages/ServicioDetails";
import NotFoundPage404 from "./modules/core/pages/NotFoundPage404";
import ServicioList from "./modules/core/components/molecules/ServicioList/ServicioList";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white overflow-hidden">
      <NavMenu />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detalle_servicio/:id" element={<ServicioDetails />} />
        
        <Route exact path="*" element={<NotFoundPage404 />} />
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
