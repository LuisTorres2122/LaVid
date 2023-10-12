import React, { Component } from "react";
import axios from "axios";
class CmpOfrendas extends Component {
  apiUrl = process.env.REACT_APP_APIURL;
  constructor(props) {
    super(props);
    this.state = {
      ofrendas: [],
      ofrendasFilter: [],
      buscar: "",

      NuevaOfrenda: {
        service: "",
        date: "",
        amount: "",
      },

      mostrarFormularioNuevo: false,
    };
  }

  toggleAgregar = () => {
    this.setState((prevState) => ({
      mostrarFormularioNuevo: !prevState.mostrarFormularioNuevo,
    }));
  };

  handleInputBuscar = (event) => {
    this.setState({ buscar: event.target.value });
  };

   formatoMoneda = new Intl.NumberFormat('es-GT', {
    style: 'currency',
    currency: 'GTQ'
  });

  obtenerOfrenda = () => {
    const { ofrendas, ofrendasFilter } = this.state;
    const valuebuscar = this.state.buscar.toString();
    console.log(ofrendasFilter.length);
    let resultadoOfrendas3 = ofrendas.filter((x) => {
      return (
        x.service && x.service.toLowerCase().includes(valuebuscar.toLowerCase())
      );
    });

    this.setState({
        ofrendasFilter: resultadoOfrendas3,
    });
    console.log(resultadoOfrendas3);
  };

  obtenerOfrendas = () => {
    axios
      .get(`http://localhost:4000/api/Generaloffering`)
      .then((res) => {
        this.setState({ ofrendas: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  agregarOfrenda = () => {
    const { NuevaOfrenda } = this.state;

    axios
      .post(`http://localhost:4000/api/Generaloffering`, NuevaOfrenda)
      .then((res) => {
        this.setState({
          NuevaOfrenda: {
            service: "",
            date: "",
            amount: "",
          },
          mostrarFormularioNuevo: false,
        });
        this.obtenerOfrendas();
      })
      .catch((err) => {
        console.log(err);
        alert("No se pudo Guardar los datos");
      });
  };

  componentDidMount() {
    this.obtenerOfrendas();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(`name: ${name}, value: ${value}`);
    this.setState((prevState) => ({
        NuevaOfrenda: {
        ...prevState.NuevaOfrenda,
        [name]: value,
      },
    }));
  };

  render() {
    const {
      ofrendas,
      ofrendasFilter,
      mostrarFormularioNuevo,
      NuevaOfrenda,
    } = this.state;

    return (
      <main>
        {!mostrarFormularioNuevo && (
          <section className="ml-10 w-5/6 h-screen flex flex-col p-15 items-center ">
            <h2 className="text-3xl my-5">Registro de Ofrendas</h2>
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
                  onClick={this.obtenerOfrenda}
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
                    <th
                      scope="col"
                      className="px-1 py-3 border border-blue-950"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 border border-blue-950"
                    >
                      Servicio
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 border border-blue-950"
                    >
                      Fecha
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3 border border-blue-950"
                    >
                      Monto
                    </th>
                    
                  </tr>
                </thead>
                <tbody className="m-10 text-center">
                  {ofrendasFilter.length > 0
                    ? ofrendasFilter.map((miembro) => (
                        <tr key={miembro._id}>
                          <td className="px-1 border-blue-950 border">
                            {miembro._id}
                          </td>
                          <td className="px-2 py-3  border-blue-950 border">
                            {miembro.service}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {miembro.date}
                          </td>
                          <td className="px-1 py-3  border-blue-950 border">
                            {this.formatoMoneda.format(miembro.amount)}
                          </td>
                        </tr>
                      ))
                    : ofrendas.map((miembro) => (
                        <tr key={miembro._id}>
                        <td className="px-1 border-blue-950 border">
                          {miembro._id}
                        </td>
                        <td className="px-2 py-3  border-blue-950 border">
                          {miembro.service}
                        </td>
                        <td className="px-1 py-3  border-blue-950 border">
                          {miembro.date}
                        </td>
                        <td className="px-1 py-3  border-blue-950 border">
                          {this.formatoMoneda.format(miembro.amount)}
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
              onSubmit={this.agregarOfrenda}
              className="p-10 absolute bg-blue-950 top-44 left-96 text-white border rounded-3xl w-96"
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
                    Servicio
                  </label>
                  <textarea
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="Escribir el nombre"
                    name="service"
                    value={NuevaOfrenda.service}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div  className="col-span-2" >
                  <label className="block mb-2 text-sm font-medium text-white">
                    Fecha
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    required
                    value={NuevaOfrenda.date}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div  className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Monto
                  </label>
                  <input
                    type="number"
                    name="amount"
                    className="border text-sm rounded-lg block w-full p-2.5 text-black"
                    placeholder="5000.00"
                    required
                    value={NuevaOfrenda.amount}
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
      </main>
    );
  }
}

export default CmpOfrendas;
