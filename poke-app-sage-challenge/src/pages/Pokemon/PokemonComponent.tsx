import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonByName } from '../../services/pokemon';

interface PokemonDetails {
    name: string;
    sprites: {
      front_default: string;
    };
    height: number;
    weight: number;
}

const PokemonComponent = () => {
    const { name } = useParams<{ name: string }>(); 
    const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
          try {
            const data = await getPokemonByName(name || ''); 
            setPokemon(data);
          } catch (error: any) {
            setError('Error fetching Pokémon details');
          }
    };

        if (name) {
            fetchPokemonDetails();
        }
    }, [name]);
      
    if (error) {
        return <p>{error}</p>;
    }
      
    if (!pokemon) {
        return <p>Loading...</p>;
    }

    return(
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    )
}

export default PokemonComponent;