import React from "react";
import { Link, useLocation } from "react-router-dom";

function CmpMenubar(prop) {
  // Obtiene la ubicación actual
  const UbicacionActual = useLocation();
  const Inicio = UbicacionActual.pathname === "/";
  const QuienesSomos = UbicacionActual.pathname === "/CmpQuienesSomos";
  const Actividades = UbicacionActual.pathname === "/CmpActividades";
  const Ofrendas = UbicacionActual.pathname === "/CmpReporteOfrendas";
  const Contacto = UbicacionActual.pathname === "/CmpContacto";
  const Login = UbicacionActual.pathname === "/CmpLogin";

  return (
    <nav className="w-full h-full p-1 bg-black bg-opacity-75 flex text-2xl text-white">
      <div className="w-1/2 text-left flex items-center">
        <img
          className="w-20 h-20"
          src={require(`../Imagenes/${prop.logo}.png`)}
          alt="Logo idec"
        />
        <div className="ml-5 text-center">
          <p>Iglesia de Dios Evangelio Completo</p>
          <p> La Vid</p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end pr-4">
        <ul className="flex space-x-9">
          <li>
            <Link to="/" className={Inicio ? "underline" : "hover:underline"}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/CmpQuienesSomos"
              className={QuienesSomos ? "underline" : "hover:underline"}
            >
              Quienes Somos
            </Link>
          </li>
          <li>
            <Link
              to="/CmpActividades"
              className={Actividades ? "underline" : "hover:underline"}
            >
              Actividades
            </Link>
          </li>
          <li>
            <Link
              to="/CmpReporteOfrendas"
              className={Ofrendas ? "underline" : "hover:underline"}
            >
              Ofrendas
            </Link>
          </li>
          <li>
            <Link
              to="/CmpContacto"
              className={Contacto ? "underline" : "hover:underline"}
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to="/CmpLogin"
              className={Login ? "underline" : "hover:underline"}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default CmpMenubar;
//Instalamos react router para el enrutamiento
//npm install react-router-dom
