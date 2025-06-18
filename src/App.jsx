import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import StartScreen from './components/StartScreen/StartScreen'; // Asegúrate de tener este componente
import Rosco from './components/Rosco/Rosco';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/rosco" element={<Rosco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
