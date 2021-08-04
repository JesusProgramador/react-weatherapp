import React from 'react';

const Pokemon = (props) => {
    const { pokemon } = props

    return (
      <div className="card-main">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />

        <div className="pokemon-info">
          <p>
            Nombre: {pokemon.name}
          </p>
          <span>#{pokemon.id}</span>
        </div>

        <div className="pokemon-type">
          {pokemon.types.map((type, index) => {
            return <div key={index}>{type.type.name}</div>;
          })}
        </div>
      </div>
    );
};

export default Pokemon;