import React, { useState, useEffect, useCallback } from "react";
import Main from "../template/Main/Main";
import Card from "../Card/Card";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const listPokemons = {
    count: "",
    next: "",
    previous: "",
    results: [],
  };

  const pokemonsDetails = [];

  const initialState = { listPokemons, pokemonsDetails };

  const [pokemons, setPokemons] = useState(initialState);

  const getPokemonsDetails = (listPokemons) => {
    return Promise.all(
      listPokemons.results.map(async (poke) => {
        const resp = await axios.get(poke.url);
        const objPokemon = {
          name: resp.data.name,
          id: resp.data.id,
          stats: resp.data.stats,
          weight: resp.data.weight,
          image: resp.data.sprites.other.dream_world.front_default,
          types: resp.data.types,
        };
        return objPokemon;
      })
    );
  };

  const getPokemons = useCallback(
    async (url) => {
      if(url == null){
        return 
      }
      const listPokemons = (await axios.get(url)).data;

      const pokemonsDetails = await getPokemonsDetails(listPokemons);

      setPokemons({ listPokemons, pokemonsDetails });
      window.scrollTo(0, 0);
    },
    [setPokemons]
  );

  useEffect(() => {
    getPokemons("https://pokeapi.co/api/v2/pokemon/?limit=12");
  }, [getPokemons]);

  const createCard = () => {
    const { pokemonsDetails } = pokemons;

    return (
      pokemonsDetails &&
      pokemonsDetails.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            stats={pokemon.stats}
            weight={pokemon.weight}
            image={pokemon.image}
            types={pokemon.types}
          />
        );
      })
    );
  };

  return (
    <Main>
      <div className="cards">{createCard()}</div>
      <div className="actions">
        <button className="btn btn-dark m-1" onClick={() => getPokemons(pokemons.listPokemons.previous)}>Anterior</button>
        <button className="btn btn-dark m-1" onClick={() => getPokemons(pokemons.listPokemons.next)}>Próximo</button>
      </div>
      
    </Main>
  );
};

export default Home;
