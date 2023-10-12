import React from "react";
function CmpQuienesSomos() {
  // Supongamos que tienes una lista de imágenes y sus descripciones
  const imagenesConDescripcion = [
    {
      imagen: require("../Imagenes/LugarIglesia.jpg"),
      descripcion: "Iglesia",
    },
    {
      imagen: require("../Imagenes/imagen1.jpg"),
      descripcion: "Iglesia",
    },
    {
      imagen: require("../Imagenes/imagen2.jpg"),
      descripcion: "Iglesia",
    },
    {
      imagen: require("../Imagenes/imagen3.jpg"),
      descripcion: "Iglesia",
    },
    {
      imagen: require("../Imagenes/imagen4.jpg"),
      descripcion: "Iglesia",
    },
    {
      imagen: require("../Imagenes/imagen5.jpg"),
      descripcion: "Iglesia",
    },
  ];

  return (
    <div className="bg-gray-200 flex flex-col min-h-screen">
      <div>
        <img
          className="w-full"
          src={require(`../Imagenes/LogoLetrasLaVid.png`)}
          alt="Logo idec"
        />
      </div>

      <div className="flex flex-col bg-white bg-opacity-90 ml-80 mr-80">
        <div className="flex flex-row">
          <img
            className="pt-10 pb-10 w-full p-10 "
            src={require(`../Imagenes/LugarIglesia.jpg`)}
            alt="Logo idec"
          />
        </div>
        <div className="w-full flex items-center text-3xl text-center pr-20 pb-10">
          <p className="text-justify pl-20">
            Somos iglesia de Dios, evangelio completo, la vid, es ser una
            comunidad de fe comprometida a vivir y compartir el evangelio
            completo de Jesucristo. Buscamos amar a Dios con todo nuestro
            corazón, alma y mente, y amar a nuestro prójimo como a nosotros
            mismos. A través de la adoración, la enseñanza de las Escrituras y
            la comunidad, estamos comprometidos a crecer espiritualmente y a ser
            una fuente de esperanza y transformación para nuestra comunidad y el
            mundo.
          </p>
        </div>
      </div>

      <div className=" ml-80 mr-80 bg-black bg-opacity-80">
        <h1 className="font-bold text-white text-center text-5xl p-4">
          Pastores
        </h1>
      </div>
      <div className="flex flex-col bg-white bg-opacity-90 ml-80 mr-80">
        <div className="flex flex-row">
          <div className=" flex justify-center">
            <img
              className="pt-10 pb-10 w-1/2 "
              src={require(`../Imagenes/Pastores.jpg`)}
              alt="Logo idec"
            />
          </div>
          <div className="w-1/2 flex items-center text-3xl text-center pr-20">
            <p>Pastor Víctor Gomez y Pastora Damarias Paíz de Gómez</p>
          </div>
        </div>
        <div className="w-full flex items-center text-3xl text-center pr-20 pb-10">
          <p className="text-justify pl-20">
            Somos los pastores de la Iglesia de Dios, Evangelio Completo, La
            Vid, y estamos comprometidos a guiar a nuestra congregación con
            amor, fe y dedicación. Nuestro llamado es llevar a cabo el
            ministerio pastoral con pasión y humildad, sirviendo como siervos de
            Dios y líderes espirituales de nuestra comunidad.
          </p>
        </div>
      </div>
      <div className=" bg-black bg-opacity-80">
        <h1 className="font-bold text-white text-center text-5xl p-4">
          Instalaciones
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6 ml-5 mr-5 pb-10">
  {imagenesConDescripcion.map((imagenConDescripcion, index) => (
    <div key={index} className="text-center flex flex-col items-center">
      <img
        src={imagenConDescripcion.imagen}
        alt={`Imagen ${index + 1}`}
        className="w-180 h-80" // Ajusta los valores de tamaño según sea necesario
      />
      <p className="mt-2 text-black text-xl">
        {imagenConDescripcion.descripcion}
      </p>
    </div>
  ))}
</div>
    </div>
  );
}

export default CmpQuienesSomos;
