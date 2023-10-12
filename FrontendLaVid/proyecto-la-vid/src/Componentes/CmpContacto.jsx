import React from "react";
function CmpContacto(prop) {
  const iconoContacto = require(`../Imagenes/${prop.icono}.png`);
  //Declarando hooks

  return (
    <div className="flex flex-col  min-h-screen">
    <div className="h-1/2 w-1/3 bg-black bg-opacity-75 flex mx-auto mt-20 items-center flex-col">
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
      
    </div>
  );
}

export default CmpContacto;
