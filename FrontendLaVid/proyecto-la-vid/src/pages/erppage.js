import React from 'react';
import CmpSideBar from '../Componentes/CmpSideBar';
import CmpMiembros from '../Componentes/CmpMiembros';
import { Routes, Route } from 'react-router-dom';
import CmpOfrendas from '../Componentes/CmpOfrendas';

function ErpPage(prop) {
  return (
    <div className="min-h-screen flex flex-row w-full">
      <CmpSideBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/CmpOfrendas" element={<CmpOfrendas />} />
          <Route path="/CmpMiembros" element={<CmpMiembros />} />

        </Routes>



      </div>
    </div>
  );
}

export default ErpPage;