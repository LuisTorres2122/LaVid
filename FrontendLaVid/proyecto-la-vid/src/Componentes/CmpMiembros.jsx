import React, { Component } from "react";
import axios from "axios";

class CmpMiembros extends Component {
  apiUrl = process.env.REACT_APP_APIURL;
  constructor(props) {
    super(props);
    this.state = {
      miembros: [],
      miembrosFilter: [],
      buscar: "",

      nuevoMiembro: {
        name: "",
        address: "",
        email: "",
        phone: "",
        birthday: "",
        position: "",
        estatus: "",
      },

      modificarMiembro: {
        name: "",
        address: "",
        email: "",
        phone: "",
        birthday: "",
        position: "",
        estatus: "",
      },

      mostrarFormularioNuevo: false,
      mostarFormularioModificar: false,
      mostrarFormularioEliminar: false,
      idMiembroEliminar: "",
      idMiembroActualizar:"",
    };
  }

  mostrarFormularioModificar = (cita) => {
    this.setState({
      mostrarFormulario3: true,
      citaModificar: cita,
    });
  };

  toggleAgregar = () => {
    this.setState((prevState) => ({
      mostrarFormularioNuevo: !prevState.mostrarFormularioNuevo,
    }));
  };

  toggleEliminar = (id) => {
    this.setState((prevState) => ({
      mostrarFormularioEliminar: !prevState.mostrarFormularioEliminar,
      idMiembroEliminar: id,
    }));
  };

  toggleActualizar = (data) => {
    let fechaNacimiento = "";
    if(data.birthday){
     fechaNacimiento = data.birthday.split('/').reverse().join('-')
    }
    
    this.setState((prevState) => ({
      mostrarFormularioModificar: !prevState.mostrarFormularioModificar,
      modificarMiembro: {
        name: data.name,
        address: data.address,
        email: data.email,
        phone: data.phone,
        birthday: fechaNacimiento,
        position: data.position,
        estatus: data.estatus,
      },
      idMiembroActualizar: data._id
    }));
  };

  handleInputBuscar = (event) => {
    this.setState({ buscar: event.target.value });
  };

  obtenerMiembro = () => {
    const { miembros, miembrosFilter } = this.state;
    const valuebuscar = this.state.buscar.toString();
    console.log(miembrosFilter.length);
    let resultadoMiembros = miembros.filter((x) => {
      return x.name && x.name.toLowerCase().includes(valuebuscar.toLowerCase());
    });

    this.setState({
      miembrosFilter: resultadoMiembros,
    });
    console.log(resultadoMiembros);
  };

  obtenerMiembros = () => {
    axios
      .get(`http://localhost:4000/api/members`)
      .then((res) => {
        this.setState({ miembros: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  modificarMiembro = () => {
    const { modificarMiembro, idMiembroActualizar } = this.state;

    axios
      .put(
        `http://localhost:4000/api/members/${idMiembroActualizar}`,
        modificarMiembro
      )
      .then((res) => {
        console.log("Se realizo correctamente la actulización");
        this.setState({
          mostrarFormularioNuevo: false,

        })
      })
      .catch((err)=>{
        console.log(err);
        alert('No se pudo Actualizar');
      });
  };

  agregarMiembro = () => {
    const { nuevoMiembro } = this.state;
    
    axios
      .post(`http://localhost:4000/api/members`, nuevoMiembro)
      .then((res) => {
        this.setState({
          nuevoMiembro: {
            _id: "",
            name: "",
            address: "",
            email: "",
            phone: "",
            birthday: "",
            position: "",
            estatus: "",
          },
          mostrarFormularioNuevo: false,
        });
        this.obtenerMiembros();
      })
      .catch((err) => {
        console.log(err);
        alert("No se pudo Guardar los datos");
      });
  };

  eliminarMiembro = (x) => {
    const { idMiembroEliminar } = this.state;
    axios
      .delete(`http://localhost:4000/api/members/${idMiembroEliminar}`)
      .then((x) => {
        console.log("Se elimino Correctamente");
        this.setState({
          mostrarFormularioEliminar: false,
        });
        this.obtenerMiembros();
      })
      .catch((x) => {
        console.log("No se pudo eliminar");
        alert("No se pudo eliminar");
      });
  };

  componentDidMount() {
    this.obtenerMiembros();
  }

  
  handleInputActualizar = (event) => {
    const { name, value } = event.target;
    console.log(`name: ${name}, value: ${value}`);
    this.setState((prevState) => ({
      modificarMiembro: {
        ...prevState.modificarMiembro,
        [name]: value,
      },
    }));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(`name: ${name}, value: ${value}`);
    this.setState((prevState) => ({
      nuevoMiembro: {
        ...prevState.nuevoMiembro,
        [name]: value,
      },
    }));
  };

  render() {
    const {
      miembros,
      miembrosFilter,
      mostrarFormularioNuevo,
      nuevoMiembro,
      mostrarFormularioEliminar,
      mostrarFormularioModificar,

    } = this.state;

    return (
      <main>
        {!(mostrarFormularioNuevo || mostrarFormularioEliminar || mostrarFormularioModificar) && (
          <section className="ml-10 w-5/6 h-screen flex flex-col p-15 items-center ">
            <h2 className="text-3xl my-5">Registro de miembros</h2>
            <nav className="w-2/3 flex justify-between my-2">
              <div className="w-1/2 flex flex-row gap-3">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="text-sm rounded-lg text-black block w-full pl-10 p-2 border border-blue-950"
                    placeholder="Buscar por nombre"
                    name="buscar"
                    value={this.state.buscar}
                    onChange={this.handleInputBuscar}
                  />
                </div>
                <button
                  className="bg-blue-950 p-2 rounded-lg text-white font-semibold "
                  onClick={this.obtenerMiembro}
                >
                  Buscar
                </button>
              </div>
              <button
                className="bg-green-800 p-2 rounded-lg text-white font-semibold w-24"
                onClick={this.toggleAgregar}
              >
                Agregar
              </button>
            </nav>
            <section className="w-full px-5 ">
              <table className="w-full">
                <thead className="bg-blue-950 font-semibold text-white">
                  <tr>
                    <th scope="col" className="px-1 py-3 border border-blue-950">
                      Id
                    </th>
                    <th scope="col" className="px-2 py-3 border border-blue-950">
                      Nombre
                    </th>
                    <th scope="col" className="px-2 py-3 border border-blue-950">
                      Direccion
                    </th>
                    <th scope="col" className="px-1 py-3 border border-blue-950">
                      Email
                    </th>
                    <th scope="col" className="px-1 py-3 border border-blue-950">
                      Telefono
                    </th>
                    <th scope="col" className="px-1 py-3 border border-blue-950">
                      Fecha Nacimiento
                    </th>
                    <th scope="col" className="px-1 py-3 border border-blue-950">
                      Cargo
                    </th>
                    <th scope="col" className="px-1 py-3 border border-blue-950">
                      Estado
                    </th>
                    <th scope="col" className="px-1 py-3 border border-blue-950">
                      ...
                    </th>
                  </tr>
                </thead>
                <tbody className="m-10 text-center">
                  {miembrosFilter.length > 0
                    ? miembrosFilter.map((miembro) => (
                        <tr key={miembro._id}>
                          <td className="px-1 border-blue-950 border">
                            {miembro._id}
                          </td>
                          <td className="px-2 py-3  border-blue-950 border">
                            {miembro.name}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.address}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.email}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.phone}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.birthday}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.position}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.estatus}
                          </td>
                          <td className="flex flex-col gap-1 border border-black p-1">
                            <button className="hover:bg-blue-800 p-1 rounded-lg hover:text-white bg-white text-blue-800 font-semibold text-lg"
                            onClick={() => this.toggleActualizar(miembro._id)}>
                              Actualizar
                            </button>
                            <button
                              className="hover:bg-red-800 p-1 rounded-lg hover:text-white bg-white text-red-800 font-semibold text-lg"
                              onClick={() => this.toggleEliminar(miembro)}
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))
                    : miembros.map((miembro) => (
                        <tr key={miembro._id}>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro._id}
                          </td> 
                          <td className="px-2 py-3  border-blue-950 border">
                            {miembro.name}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.address}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.email}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.phone}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.birthday}
                          </td>
                          <td className="px-1 py-3 border-blue-950 border">
                            {miembro.position}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.estatus}
                          </td>
                          <td className="flex flex-col gap-1  border-blue-950 border p-1">
                            <button className="hover:bg-blue-800 p-1 rounded-lg hover:text-white bg-white text-blue-800 font-semibold text-lg"
                            onClick={() => this.toggleActualizar(miembro)}>
                              Actualizar
                            </button>
                            <button
                              className="hover:bg-red-800 p-1 rounded-lg hover:text-white bg-white text-red-800 font-semibold text-lg"
                              onClick={() => this.toggleEliminar(miembro._id)}
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </section>
          </section>
        )}
        {mostrarFormularioNuevo && (
          <section className="ml-10 w-full h-full flex flex-col p-15 items-center relative ">
            <form
              onSubmit={this.agregarMiembro}
              className="p-10 absolute bg-blue-950 top-44 left-96 text-white border rounded-3xl"
            >
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                <h3 className="text-lg font-semibold text-white">Agregar</h3>
                <button
                  type="button"
                  className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:text-gray-400 text-white"
                  onClick={this.toggleAgregar}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="Escribir el nombre"
                    name="name"
                    value={nuevoMiembro.name}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="54654565"
                    value={nuevoMiembro.phone}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="lavid@gmail.com"
                    value={nuevoMiembro.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Dirección
                  </label>
                  <input
                    name="address"
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="20 calle 22-12 Zona 18"
                    value={nuevoMiembro.address}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Fecha Nacimiento
                  </label>
                  <input
                    name="birthday"
                    type="date"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    required
                    value={nuevoMiembro.birthday}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Estado
                  </label>
                  <select
                    name="estatus"
                    id=""
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    required
                    value={nuevoMiembro.estatus}
                    onChange={this.handleInputChange}
                  >
                    <option value="">Seleccionar estado</option>
                    <option value="activo">Activo</option>
                    <option value="noactivo">No Activo</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Cargo
                  </label>
                  <input
                    type="text"
                    name="position"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="Lider"
                    required
                    value={nuevoMiembro.position}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center rounded-lg text-sm px-4 py-2"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6 my-auto"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Agregar nuevo registro
              </button>
            </form>
          </section>
        )}
        {mostrarFormularioEliminar && (
          <div className="relative ">
            <div className="absolute top-72 right-2/4">
              <div className="relative p-4 w-full max-w-md max-h-full bg-blue-950 border rounded-2xl">
                <div className="relative p-4 text-center bg-enmarcadora-principal rounded-lg shadow sm:p-5">
                  <button
                    type="button"
                    onClick={this.toggleEliminar}
                    className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:text-gray-400 text-white absolute top-2.5 right-2.5"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <svg
                    className="text-gray-400 w-11 h-11 mb-3.5 mx-auto"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Esta seguro de eliminar el registro
                  </p>
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      onClick={this.toggleEliminar}
                      data-modal-toggle="deleteModal"
                      type="button"
                      className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      No, cancelar
                    </button>
                    <button
                      onClick={this.eliminarMiembro}
                      className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                      Si, Estoy seguro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {mostrarFormularioModificar && (
          <section className="ml-10 w-full h-full flex flex-col p-15 items-center relative ">
            <form
              onSubmit={this.modificarMiembro}
              className="p-10 absolute bg-blue-950 top-44 left-96 text-white border rounded-3xl"
            >
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                <h3 className="text-lg font-semibold text-white">Modificar</h3>
                <button
                  type="button"
                  className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:text-gray-400 text-white"
                  onClick={this.toggleActualizar}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="Escribir el nombre"
                    name="name"
                    value={this.state.modificarMiembro.name}
                    onChange={this.handleInputActualizar}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="54654565"
                    value={this.state.modificarMiembro.phone}
                    onChange={this.handleInputActualizar}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="lavid@gmail.com"
                    value={this.state.modificarMiembro.email}
                    onChange={this.handleInputActualizar}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Dirección
                  </label>
                  <input
                    name="address"
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="20 calle 22-12 Zona 18"
                    value={this.state.modificarMiembro.address}
                    onChange={this.handleInputActualizar}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Fecha Nacimiento
                  </label>
                  <input
                    name="birthday"
                    type="date"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    required
                    value={this.state.modificarMiembro.birthday}
                    onChange={this.handleInputActualizar}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Estado
                  </label>
                  <select
                    name="estatus"
                    id=""
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    required
                    value={this.state.modificarMiembro.estatus}
                    onChange={this.handleInputActualizar}
                  >
                    <option value="">Seleccionar estado</option>
                    <option value="activo">Activo</option>
                    <option value="noactivo">No Activo</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Cargo
                  </label>
                  <input
                    type="text"
                    name="position"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="Lider"
                    required
                    value={this.state.modificarMiembro.position}
                    onChange={this.handleInputActualizar}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center rounded-lg text-sm px-4 py-2"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6 my-auto"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Actualizar registro
              </button>
            </form>
          </section>
        )}
      </main>
    );
  }
}

export default CmpMiembros;
