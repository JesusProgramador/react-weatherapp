import React from "react";

import "./App.css";
import "bulma/css/bulma.css";

import { Title } from "./components/Title";
import PokeForm  from "./components/PokeForm";

import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from "./api";

const { useState, useEffect } = React;



export default function App(){

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => { 
    try {
      setLoading(true);
      const data = await getPokemons(25, 25*page);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25))

    } catch (error) {
      
    }
   }

  /* Cuando inicie la app la primera vez hara la peticion de traer todos los pokemones. El useEffect solo carga una vez cuando se carga la app */
  useEffect(() => {  
    fetchPokemons();
  }, [page]) //Cuando haga un cambio en el page, cuando se cambie de page el fewtchPokemons hara una nueva peticion
  
    return (
      <div className="App">
        <Title />
        <div className="PokeForm-wrapper">
          <PokeForm />
          
          
          {loading ? (
            <div>Cargando pokemones...</div>
          ) : (
          /* Envia todos los pokemones a la pokedex */
          <Pokedex 
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
          )}
          
        </div>
      </div>
    );
  
}
  

