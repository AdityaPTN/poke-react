import React from 'react';
import Header from './Header'
import Footer from './Footer'
import PokemonSelect from './PokemonSelect';

function SelectPokemon() {
  return (
    <div>
      <Header />
      <PokemonSelect />
      <Footer />
    </div>
  );
}

export default SelectPokemon;
