import React from "react";
function CmpServicios(prop){
    return(
        <div className="flex bg-white bg-opacity-80 pb-10">
        <div className="w-1/2 text-6xl p-10 flex flex-col items-center justify-center ">
          <h2 className="pb-4">{prop.titulo}</h2>
          <div className="flex items-center justify-center">
            <img
              className=""
              src={require(`../Imagenes/${prop.ImagenServicio}.jpg`)}
              alt="Logo idec"
            />
          </div>
        </div>
        <div className="w-1/2 text-center my-auto pl-20 pr-20 items-center">
          <h2 className="font-bold text-4xl pb-5">{prop.dia}</h2>
          <p className="text-3xl">
            {prop.descripcion}
          </p>
        </div>
      </div>
    );
}
export default CmpServicios;