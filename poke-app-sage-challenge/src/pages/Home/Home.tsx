import React, { useState, useEffect } from 'react';
import { getPokemonById } from '../../services/pokemon';


interface PokemonDetails {
    name: string;
    sprites: {
      front_default: string;
    };
    height: number;
    weight: number;
  }
const Home = () => {
    const [randomPokemon, setRandomPokemon] = useState<PokemonDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

    const fetchRandomPokemon = async () => {
        const randomId = Math.floor(Math.random() * 1010) + 1;
        
        try {
          const pokemon = await getPokemonById(randomId);
          const transformedPokemon: PokemonDetails = {
            name: pokemon.name,
            sprites: {
              front_default: pokemon.sprites.front_default,
            },
            height: pokemon.height,
            weight: pokemon.weight,
          };
          setRandomPokemon(pokemon);
        } catch (error: any) {
          setError('Failed to load random Pokémon');
        }
     
    };

    useEffect(() => {
        fetchRandomPokemon();
    }, []);
    
    if (error) {
        return <p>{error}</p>;
    }
    
    if (!randomPokemon) {
        return <p>Loading...</p>;
    }

    return(
        <div>
            <h1>Random Pokémon</h1>
            <h2>{randomPokemon.name}</h2>
            <img src={randomPokemon.sprites.front_default} alt={randomPokemon.name} />
            <p>Weight: {randomPokemon.weight}</p>
    </div>
    )
}

export default Home;