import React from "react";
import { useState } from "react";
function CmpContacto(prop) {
  const iconoContacto = require(`../Imagenes/${prop.icono}.png`);
  //Declarando hooks
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-full w-1/3 bg-black bg-opacity-75 flex flex-grow mx-auto mt-20 items-center flex-col">
        <div className="pt-10 flex flex-row">
          {/* Icono de contacto */}
          <div className="pr-5 pt-2">
            <img
              src={iconoContacto}
              alt="Icono de contacto"
              className="w-10 h-10"
            />
          </div>
          {/* Texto de contacto a la derecha */}
          <div className="left-1/2">
            <h1 className="text-white text-5xl font-bold">Contacto</h1>
          </div>
        </div>
        <div className="text-white pt-5 text-center text-2xl mx-4 pb-10">
          <h2 className="font-bold text-3xl">
            Iglesia de Dios Evangelio Completo La Vid
          </h2>
          <p className="">
            25 avenida, 11-97, Paraíso II, zona 18, Ciudad de Guatemala,
            Guatemala
          </p>
          <p>Tel: 12345678</p>
          <p>idec@gmail.com</p>
        </div>
      </div>
      <div className="h-full w-1/3 bg-white font-bold mx-auto pt-4 mt-10 mb-10 rounded-lg">
        <h2 className="ml-5 text-2xl">Ponte en contacto</h2>
        <form onSubmit="" className="text-white text-center p-5 rounded-lg ">
          <div className="mb-4">
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-1/2 p-2 border rounded text-black"
            />
            <input
              type="text"
              id="apellido"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className=" w-1/2 p-2 border rounded text-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-1/2 p-2 border rounded text-black"
            />
            <input
              type="tel"
              id="telefono"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-1/2 p-2 border rounded text-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="direccion"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full p-2 border rounded text-black"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="mensaje"
              placeholder="Escribe tu mensaje aquí"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full p-2 border rounded text-black"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CmpContacto;
