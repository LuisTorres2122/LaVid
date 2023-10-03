import React from 'react';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './App.css';
import CmpMenubar from './Componentes/CmpMenuBar';
import CmpInicio from './Componentes/CmpInicio';
import CmpQuienesSomos from './Componentes/CmpQuienesSomos';
import CmpActividades from './Componentes/CmpActividades';
import CmpOfrendas from './Componentes/CmpOfrendas';
import CmpContacto from './Componentes/CmpContacto';
import CmpLogin from './Componentes/CmpLogin';
import CmpFooter from './Componentes/CmpFooter';
// Importa la imagen de fondo
import fondo2 from './Imagenes/fondo2.jpg';
function App() {
    return (
      <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${fondo2})`}}>
        <CmpMenubar logo="LogoIdec"/>
        <Routes>
        <Route path="/" element={<CmpInicio letras="LetrasIdec" />} />
        <Route path="/CmpQuienesSomos" element={<CmpQuienesSomos />} />
        <Route path="/CmpActividades" element={<CmpActividades /> } />
        <Route path="/CmpOfrendas" element={<CmpOfrendas />} />
        <Route path="/CmpContacto" element={<CmpContacto icono="iconoContacto" />} />
        <Route path="/CmpLogin" element={<CmpLogin />} />
        </Routes>
        <CmpFooter />
      </div>
    );
}
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
