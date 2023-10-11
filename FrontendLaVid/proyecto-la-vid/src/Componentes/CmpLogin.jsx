import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function CmpLogin(prop) {
  //Declarando hooks
  const [usuario, setUser] = useState("");
  const [contra, setPassword] = useState("");

  return (
    <div
      style={{
        boxShadow: "10px 4px 32px -5px rgba(0,0,0,0.75)",
      }}
      className="max-w-md mx-auto p-4 m-40 bg-black bg-opacity-50 shadow-md rounded "
    >
      <h2 className=" text-white text-2xl font-semibold text-center mb-4">
        Iniciar Sesión
      </h2>
      <form onSubmit="" action="" method="">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm text-white font-medium "
          >
            Nombre de Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nombre de usuario"
            value={usuario}
            onChange={(e) => setUser(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={contra}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <Link className="flex items-center justify-between" to="/Erp">
          <button
            id="authenticateUser"
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >Enviar</button>
        </Link>
      </form>
    </div>
  );
}

export default CmpLogin;
