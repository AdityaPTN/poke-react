import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, id }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-item">
        <h3>{name}</h3>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
        />
        <div>
          <Link
            to={`/pokemon/${id}`}
            className="modal-close-btn"
          >
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;