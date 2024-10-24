import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonList, Pokemon } from '../../services/pokemon';
import '../../styles.css';

const List = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const data = await getPokemonList();
        setPokemonList(data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchPokemonList();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default List;