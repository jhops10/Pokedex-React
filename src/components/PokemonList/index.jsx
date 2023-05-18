import { useEffect, useState } from 'react';
import CardPokemon from '../CardPokemon';
import './PokemonList.css';
import axios from 'axios';
import Navbar from '../Navbar';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  const pokemonCardsLimit = 151;

  const getPokemon = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${pokemonCardsLimit}&offset=0`
      )
      .then((res) => setPokemonList(res.data.results));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const sortPokemonsByName = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${pokemonCardsLimit}&offset=0`
      )
      .then((res) => {
        const sortedPokemons = [...res.data.results];

        sortedPokemons.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setPokemonList(sortedPokemons);
      });
  };

  return (
    <>
      <Navbar sortPokemonsByName={sortPokemonsByName} getPokemon={getPokemon} />
      <section>
        {pokemonList.map((pokemon) => (
          <CardPokemon key={pokemon.name} data={pokemon} />
        ))}
      </section>
    </>
  );
}
