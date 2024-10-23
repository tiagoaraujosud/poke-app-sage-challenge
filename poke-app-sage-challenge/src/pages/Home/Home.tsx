import React, { useState, useEffect } from 'react';
import { getPokemonById, Pokemon } from '../../services/pokemon';

const Home = () => {
    const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchRandomPokemon = async () => {
        const randomId = Math.floor(Math.random() * 1010) + 1;
        try {
          const pokemon = await getPokemonById(randomId);
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
            <img alt={randomPokemon.name} />
            <p>Weight: {randomPokemon.weight}</p>
    </div>
    )
}

export default Home;