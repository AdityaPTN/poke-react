import React from 'react';
import HubungiKamiForm from './HubungiKamiForm';
import PokemonCard from './PokemonCard';
import usePoke from './Pokemons';

const Main = () => {
    const pokeAPI = 'https://pokeapi.co/api/v2/pokemon?limit=12';
    const { pokemon, fetch } = usePoke((state) => state)
    return(
        <div className='main-wrapper'>
            <div className='main'>
                <div className='hello-container'>
                    <h1>Hello, Pokemon hunter</h1>
                    <h2>Selamat datang di dunia Pokemon</h2>
                </div>
                <button onClick={()=>{
                    fetch(pokeAPI)
                }}>Call API</button>
                {console.log("pokemon",pokemon)}
                <div className='pokemon-container'>
                    <h3>List Pokemon</h3>
                    <div className='list-card'>
                        {pokemon.length == undefined ? "" : pokemon.map((pokemon, index)=>{
                            return <PokemonCard key={index} name={pokemon.name} id={index + 1} />;
                        })}
                    </div>
                </div>
                {/*Masukkan komponen HubungiKamiForm.js di bawah ini*/}
                <div className='hubungikami-container'>
                    <h3>Hubungi Kami</h3>
                    <HubungiKamiForm/>
                </div>
            </div>
        </div>
    );
}


export default Main;