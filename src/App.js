import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPokemon from './components/CardPokemon'
import SelectPokemon from "./components/SelectPokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardPokemon />} />
        <Route path="/pokemon/:id" element={<SelectPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
