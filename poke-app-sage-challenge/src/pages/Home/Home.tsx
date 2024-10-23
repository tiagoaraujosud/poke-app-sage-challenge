import React, { useState, useEffect } from 'react';
import { getPokemonById } from '../../services/pokemon';

interface Ability {
    ability: {
      name: string;
      url: string;
    };
  }

  interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

interface PokemonDetails {
    name: string;
    sprites: {
      front_default: string;
    };
    height: number;
    weight: number;
    types: Type[],
    abilities: Ability[];
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
            types: pokemon.types,
            abilities: pokemon.abilities
          };
          setRandomPokemon(transformedPokemon);
          console.log(transformedPokemon)
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
            <h3>Type</h3>
            <ul>
                {randomPokemon.types && randomPokemon.types.length > 0 ? (
                randomPokemon.types.map((typeObj) => (
                <li key={1}>{typeObj.type.name}</li>
                ))
                ) : (
                    <li>No types available</li>
                )}  
            </ul>
            <h3>Abilities</h3>
            <ul>
                {randomPokemon.abilities.map((abilityObj) => (
                <li key={abilityObj.ability.name}>{abilityObj.ability.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home;