import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import ErpPage from './pages/erppage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/Erp/*" element={<ErpPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;