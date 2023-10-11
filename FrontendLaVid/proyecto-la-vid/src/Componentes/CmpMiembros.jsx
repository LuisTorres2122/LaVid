import React, { Component } from "react";
import { Constants } from "../constants";
import axios from "axios";

class CmpMiembros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miembros: [],

      nuevoMiembro: {
        id: "",
        name: "",
        address: "",
        email: "",
        phone: "",
        birthday: "",
        position: "",
        estatus: "",
      },

      modificarMiembro: {
        id: "",
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
    };
  }

  handleIdMiembroEliminarChange = (event) => {
    const { value } = event.target;
    this.setState({ idMiembroEliminar: value });
  };

  mostrarFormularioModificar = (cita) => {
    this.setState({
      mostrarFormulario3: true,
      citaModificar: cita,
    });
  };

  obtenerMiembros = () => {
    axios
      .get(`${Constants.apiUrl}/members`)
      .then((res) => {
        this.setState({ miembros: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  modificarMiembro = () => {
    const { modificarMiembro, miembros } =
      this.state;

    axios
      .put(`${Constants.apiUrl}/members/${modificarMiembro.id}`, modificarMiembro)
      .then((res) => {
        let datosActualizados = {
          id: res.data.id,
          name: res.data.name,
          address: res.data.address,
          email: res.data.email,
          phone: res.data.phone,
          birthday: res.data.birthday,
          position: res.data.position,
          estatus: res.data.status,
        };
        let indiceMiembro = miembros.findIndex(
          (x) => x.id === modificarMiembro.id
        );

        if (indiceMiembro !== -1) {
          this.setState((prevState) => ({
            miembros: [
              ...prevState.miembros.slice(0, indiceMiembro),
              datosActualizados,
              ...prevState.miembros.slice(indiceMiembro + 1),
            ],
            modificarMiembro: {
              id: "",
              name: "",
              address: "",
              email: "",
              phone: "",
              birthday: "",
              position: "",
              estatus: "",
            },
            mostarFormularioModificar: false,
          }));
        }
      });
  };

  agregarMiembro = () => {
    const { miembros, nuevoMiembro } = this.state;

    axios
      .post(`${Constants.apiUrl}/members`, nuevoMiembro)
      .then((res) => {
        this.setState({
          nuevoMiembro: {
            id: "",
            name: "",
            address: "",
            email: "",
            phone: "",
            birthday: "",
            position: "",
            estatus: "",
          },
          miembros: [...miembros, res.data],
          mostrarFormularioNuevo: false,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount(){
    this.obtenerMiembros();
  }

  render() {
    const { miembros } = this.state;

    return (
      <main className="w-full h-screen flex flex-col p-15">
        <nav className="w-full">
          <div className="relative w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              className="text-sm rounded-lg text-black block w-full pl-10 p-2"
              placeholder="Buscar"
              name="buscar"
            />
          </div>
          <button className="">Agregar</button>
        </nav>
        <section className="w-full">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Fecha Nacimiento</th>
                <th>Cargo</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody className="m-10">
            {miembros.map((miembro) => (
              <tr key={miembro.id}>
                <td className="border-b-2 border-black">{miembro.id}</td>
                <td className="border-b-2 border-black">{miembro.name}</td>
                <td className="border-b-2 border-black">{miembro.address}</td>
                <td className="border-b-2 border-black">{miembro.email}</td>
                <td className="border-b-2 border-black">{miembro.phone}</td>
                <td className="border-b-2 border-black">{miembro.birthday}</td>
                <td className="border-b-2 border-black">{miembro.position}</td>
                <td className="border-b-2 border-black">{miembro.estatus}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </section>
      </main>
    );
  }
}


export default CmpMiembros;