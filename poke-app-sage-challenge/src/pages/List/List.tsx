import React, { useState, useEffect } from 'react';
import { getPokemonList, Pokemon } from '../../services/pokemon';


const List = () => {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getPokemonList(); 
            setPokemonList(data); 
          } catch (error: any) {
            setError(error.message); 
          }
        };
        fetchData(); 
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
          <h1>Pokemon List</h1>
          <ul>
            {pokemonList.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
    );
};


export default List;