import React from "react";

function CmpInicio(prop) {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-grow mt-40">
        <img
          className="w-200 h-200 mx-auto"
          src={require(`../Imagenes/${prop.letras}.png`)}
          alt="Logo idec"
        />
      </div>
    </div>
  );
}

export default CmpInicio;
