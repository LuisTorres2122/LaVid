import React from "react";
import { Component } from "react";
import axios from "axios";


class CmpLogin extends Component {
  //Declarando hooks
  apiUrl = process.env.REACT_APP_APIURL;
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      contra: "",
      auth: 1,
    };
  }

  logIn = () => {
    const { usuario, contra } = this.state;
    let data = {
      user: usuario,
      password: contra,
    };

    axios
      .post(`http://localhost:4000/api/autenticate`, data)
      .then((res) => {
          console.log(res);
        if(res.data.authenticated){
          console.log("Bienvenido" + usuario);
          
          window.location.href = "/ERP";
        }else{
          alert("Credenciales Incorrectas");
          
        }
    
        
      })
      .catch((err) => {
        console.log(err);
        alert("Credenciales Incorrectas");
      });
  };

  handleInputChangeName = (event) => {
    const { value } = event.target;
    console.log(`value: ${value}`);
    this.setState((prevState) => ({
      usuario: value,
    }));
  };

  handleInputChangePass = (event) => {
    const { value } = event.target;
    console.log(`value: ${value}`);
    this.setState((prevState) => ({
      contra: value,
    }));
  };

  render() {
    const { usuario, contra } = this.state;

   

    return (
      <div className="h-screen">
        <div
          style={{
            boxShadow: "10px 4px 32px -5px rgba(0,0,0,0.75)",
          }}
          className="max-w-md mx-auto p-4 m-40 bg-black bg-opacity-50 shadow-md rounded "
        >
          <h2 className=" text-white text-2xl font-semibold text-center mb-4">
            Iniciar Sesión
          </h2>
          <form >
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
                onChange={this.handleInputChangeName}
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
                onChange={this.handleInputChangePass}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              
              <button
                id="authenticateUser"
                onClick={this.logIn}
                type="button"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Enviar
              </button>
           
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CmpLogin;
