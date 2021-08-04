import React from 'react';
import { searchPokemon } from '../api';
const { useState } = React;



const PokeForm = (props) => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value)
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
   }

  return (
    <>
      <div className="search-container">
        <div className="search">
          <input type="text" placeholder="Buscar pokemon" onChange={onChange} />
        </div>

        <div className="search-btn">
          <button onClick={onClick}>Buscar</button>
        </div>
      </div>

      {/* Cuando le de a buscar un pokemon en especifico, me generara la carta de abajo con el pokemon y su info */}
      <div>
        {pokemon && (
            <div className="card-main card-center">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />

              <div className="pokemon-info">
                <p>Nombre: {pokemon.name}</p>
                <span>#{pokemon.id}</span>
              </div>

              <div className="pokemon-type">
                {pokemon.types.map((type, index) => {
                  return <div key={index}>{type.type.name}</div>;
                })}
              </div>
            </div>
        )}
      </div>
    </>
  );
};

export default PokeForm;
