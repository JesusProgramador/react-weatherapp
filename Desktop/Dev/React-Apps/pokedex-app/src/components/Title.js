import React from 'react'

export const Title = () => {

    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (

        <div className="poke-title">
        <img
          src = { imgUrl }
          alt = "pokeapi-logo"
        />
        </div>
    );
}