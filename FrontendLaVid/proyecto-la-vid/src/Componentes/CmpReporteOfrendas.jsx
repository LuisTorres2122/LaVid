import React, { Component } from "react";
import axios from "axios";
class CmpReporteOfrendas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privilege1: "",
      responsable1: "",
      privilege2: "",
      responsable2: "",
      privilege3: "",
      responsable3: "",
      privilege4: "",
      responsable4: "",
      privilege5: "",
      responsable5: "",
      name1: "",
      position1: "",
      name2: "",
      position2: "",
      name3: "",
      position3: "",
      name4: "",
      position4: "",
      name5: "",
      position5: "",
      NuevaOfrenda: {
        leader: "",
        subleader: "",
        phoneLeader: "",
        phoneSubleader: "",
        date: "",
        hour: "",
        addressCell: "",
        amount: "",
        planificationDate: "",
        planificationHour: "",
        cellplanification: [],
        snack: "",
        Observations: "",
        Assistance: [],
        // Agrega otros campos aquí
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      NuevaOfrenda: {
        ...prevState.NuevaOfrenda,
        [name]: value,
      },
    }));
  };

  handleInputCell = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      NuevaOfrenda,
      privilege1,
      responsable1,
      privilege2,
      responsable2,
      privilege3,
      responsable3,
      privilege4,
      responsable4,
      privilege5,
      responsable5,
      name1,
      position1,
      name2,
      position2,
      name3,
      position3,
      name4,
      position4,
      name5,
      position5,
    } = this.state;

    let names = [
      {
        name: name1,
        position: position1,
      },
      {
        name: name2,
        position: position2,
      },
      {
        name: name3,
        position: position3,
      },
      {
        name: name4,
        position: position4,
      },
      {
        name: name5,
        position: position5,
      },
    ];

    let cell = [
      {
        privilege: privilege1,
        resposible: responsable1,
      },
      {
        privilege: privilege2,
        resposible: responsable2,
      },
      {
        privilege: privilege3,
        resposible: responsable3,
      },
      {
        privilege: privilege4,
        resposible: responsable4,
      },
      {
        privilege: privilege5,
        resposible: responsable5,
      },
    ];

    // Define los datos a enviar en la solicitud POST
    const data = {
      leader: NuevaOfrenda.leader,
      subleader: NuevaOfrenda.subleader,
      phoneLeader: NuevaOfrenda.phoneLeader,
      phoneSubleader: NuevaOfrenda.phoneSubleader,
      date: NuevaOfrenda.date,
      hour: NuevaOfrenda.hour,
      addressCell: NuevaOfrenda.addressCell,
      amount: NuevaOfrenda.amount,
      planificationDate: NuevaOfrenda.planificationDate,
      planificationHour: NuevaOfrenda.planificationHour,
      snack: NuevaOfrenda.snack,
      Observations: NuevaOfrenda.Observations,
      cellplanification: cell,
      Assistance: names,
      // Agrega otros campos aquí según tus necesidades
    };
    console.log(data);
   

    // Realiza la solicitud POST a la API
    axios
      .post("http://localhost:4000/api/offering", data)
      .then((response) => {
        // Aquí puedes manejar la respuesta exitosa, si es necesario
        console.log("Solicitud POST exitosa", response);
        // También puedes reiniciar los valores de los campos del formulario
        this.setState({
          NuevaOfrenda: {
            leader: "",
            subleader: "",
            phoneLeader: "",
            phoneSubleader: "",
            date: "",
            hour: "",
            addressCell: "",
            amount: "",
            planificationDate: "",
            planificationHour: "",
            cellplanification: [],
            snack: "",
            Observations: "",
            Assistance: [],
          },
           privilege1: "",
          responsable1: "",
          privilege2: "",
          responsable2: "",
          privilege3: "",
          responsable3: "",
          privilege4: "",
          responsable4: "",
          privilege5: "",
          responsable5: "",
           name1: "",
          position1: "",
          name2: "",
          position2: "",
          name3: "",
          position3: "",
          name4: "",
          position4: "",
          name5: "",
          position5:"",

        });
      })
      .catch((error) => {
        // Maneja los errores en caso de que la solicitud falle
        console.error("Error al realizar la solicitud POST", error);
        alert("No se pudo guardar los datos");
      });
  };
  render() {
    const {
      NuevaOfrenda,
      privilege1,
      responsable1,
      privilege2,
      responsable2,
      privilege3,
      responsable3,
      privilege4,
      responsable4,
      privilege5,
      responsable5,
      name1,
      position1,
      name2,
      position2,
      name3,
      position3,
      name4,
      position4,
      name5,
      position5,
    } = this.state;
    return (
      <div className="flex flex-col min-h-screen">
        <div className="text-black">
          <form
            onSubmit={this.handleSubmit}
            className="text-center w-1/3 mx-auto p-4 m-40 bg-black bg-opacity-75 shadow-lg rounded  "
          >
            <p className="w-full text-3xl mb-5 text-white"> Reporte Semanal</p>
            <div className="flex flex-wrap mb-5">
              <input
                type="text"
                id="leader"
                name="leader"
                value={NuevaOfrenda.leader}
                onChange={this.handleInputChange}
                placeholder="Líder"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="phoneLeader"
                name="phoneLeader"
                value={NuevaOfrenda.phoneLeader}
                onChange={this.handleInputChange}
                placeholder="Tel. Líder"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="subleader"
                name="subleader"
                value={NuevaOfrenda.subleader}
                onChange={this.handleInputChange}
                placeholder="Sub líder"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="phoneSubleader"
                name="phoneSubleader"
                value={NuevaOfrenda.phoneSubleader}
                onChange={this.handleInputChange}
                placeholder="Tel. Sublíder"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="date"
                name="date"
                value={NuevaOfrenda.date}
                onChange={this.handleInputChange}
                placeholder="Fecha"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="hour"
                name="hour"
                value={NuevaOfrenda.hour}
                onChange={this.handleInputChange}
                placeholder="Hora"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="addressCell"
                name="addressCell"
                value={NuevaOfrenda.addressCell}
                onChange={this.handleInputChange}
                placeholder="Dirección de célula"
                className="w-full border border-opacity-75 border-black"
              />
            </div>
            <div className="mb-5">
              <label className="mr-5 text-white">Ofrenda</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={NuevaOfrenda.amount}
                onChange={this.handleInputChange}
                placeholder=" Q"
                className="pr-10"
              />
            </div>
            <div className="flex flex-wrap">
              <label className="w-70 mr-5 text-left text-white">
                Fecha de planificacion:
              </label>
              <input
                type="text"
                id="planificationDate"
                name="planificationDate"
                value={NuevaOfrenda.planificationDate}
                onChange={this.handleInputChange}
                className="w-full"
              />
              <label className="w-70 mr-5 text-left text-white">
                Hora de planificacion:
              </label>
              <input
                type="text"
                id="planificationHour"
                name="planificationHour"
                value={NuevaOfrenda.planificationHour}
                onChange={this.handleInputChange}
                className="w-full"
              />
            </div>
            <div className="flex flex-wrap">
              <label className="w-full m-5 text-white">
                Programa de célula
              </label>
              <label className="w-1/2 text-white">Privilegio</label>
              <label className="w-1/2 text-white">Responsable</label>
              <input
                type="text"
                name="privilege1"
                value={privilege1}
                onChange={this.handleInputCell}
                placeholder="Privilegio"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                name="responsable1"
                value={responsable1}
                onChange={this.handleInputCell}
                placeholder="Encargado"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                name="privilege2"
                value={privilege2}
                onChange={this.handleInputCell}
                placeholder="Alabanza"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                name="responsable2"
                value={responsable2}
                placeholder="Encargado"
                onChange={this.handleInputCell}
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                name="privilege3"
                value={privilege3}
                onChange={this.handleInputCell}
                placeholder="Dinámica"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                name="responsable3"
                value={responsable3}
                onChange={this.handleInputCell}
                placeholder="Encargado"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                name="privilege4"
                value={privilege4}
                onChange={this.handleInputCell}
                placeholder="Predica"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                name="responsable4"
                value={responsable4}
                onChange={this.handleInputCell}
                placeholder="Encargado"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                name="privilege5"
                value={privilege5}
                onChange={this.handleInputCell}
                placeholder="Ofrenda y oración final"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                name="responsable5"
                value={responsable5}
                onChange={this.handleInputCell}
                placeholder="Encargado"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="snack"
                name="snack"
                value={NuevaOfrenda.snack}
                onChange={this.handleInputChange}
                placeholder="Refacción"
                className="w-full border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="Observations"
                name="Observations"
                value={NuevaOfrenda.Observations}
                onChange={this.handleInputChange}
                placeholder="Observaciones"
                className="w-full border border-opacity-75 border-black"
              />
            </div>
            <div className="flex flex-wrap">
              <label className="w-full m-5 text-white">
                Asistencia a la célula
              </label>
              <label className="w-1/2 text-white">Nombre</label>
              <label className="w-1/2 text-white">
                Líder/Sublíder/Ayuda/Invitado
              </label>
              <input
                type="text"
                placeholder=""
                name="name1"
                value={name1}
                onChange={this.handleInputCell}
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                name="position1"
                value={position1}
                onChange={this.handleInputCell}
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                name="name2"
                value={name2}
                onChange={this.handleInputCell}
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                name="position2"
                value={position2}
                onChange={this.handleInputCell}
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                name="name3"
                value={name3}
                onChange={this.handleInputCell}
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                name="position3"
                value={position3}
                onChange={this.handleInputCell}
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                name="name4"
                value={name4}
                onChange={this.handleInputCell}
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                name="position4"
                value={position4}
                onChange={this.handleInputCell}
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                name="name5"
                value={name5}
                onChange={this.handleInputCell}
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                name="position5"
                value={position5}
                onChange={this.handleInputCell}
                className="w-1/2 border border-opacity-75 border-black"
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-5">
              Registrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default CmpReporteOfrendas;
