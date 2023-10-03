import React from "react";
import CmpServicios from "./CmpServicios";
function CmpActividades(prop) {
  return (
    <div className="text-white flex flex-col min-h-screen mx-auto">
      <div className=" bg-black bg-opacity-50">
        <h1 className="font-bold  text-center text-5xl p-4">Servicios</h1>
      </div>
      <div className="text-black">
      <CmpServicios
        titulo="Servicios Generales"
        ImagenServicio="ServiciosGenerales"
        dia="Miércoles"
        descripcion="Nos complace informarles que, los servicios generales se llevan a
        cabo los días miércoles y tienen lugar desde las 7:00 PM hasta las
        8:00 PM"
      />
      <CmpServicios
        titulo="Macrocélulas"
        ImagenServicio="Macrocelulas"
        dia="Sábados"
        descripcion="Nos complace informarles que, las macrocélulas se llevan a
        cabo los días sábados y tienen lugar desde las 5:00 PM hasta las
        7:00 PM"
      />
      <CmpServicios
        titulo="Servicios Generales"
        ImagenServicio="ServicioGDomingo"
        dia="Domingo"
        descripcion="Nos complace informarles que, los servicios generales se llevan a
        cabo los días domingos y tienen lugar desde las 9:00 AM hasta las
        11:00 AM"
      />
      </div>
     
    </div>
  );
}
export default CmpActividades;
