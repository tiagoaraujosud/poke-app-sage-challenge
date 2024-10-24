import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonByName } from '../../services/pokemon';
import '../../styles.css';
import { useDispatch } from 'react-redux';
import { saveNamePokemon } from '../../state/pokemon/pokemonSlice';

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

const PokemonComponent = () => {
    const { name } = useParams<{ name: string }>();
    const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const data = await getPokemonByName(name || '');
                setPokemon(data);
                dispatch(saveNamePokemon({ name: data.name }));
            } catch (error: any) {
                setError('Error fetching Pokémon details');
            }
        };

        if (name) {
            fetchPokemonDetails();
        }
    }, [name, dispatch]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!pokemon) {
        return <p>Loading...</p>;
    }

    return (
        <div className="pokemon-container">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
            <p>Weight: {pokemon.weight}</p>
            <h3>Type</h3>
            <ul>
                {pokemon.types && pokemon.types.length > 0 ? (
                    pokemon.types.map((typeObj) => (
                        <li key={typeObj.slot}>{typeObj.type.name}</li>
                    ))
                ) : (
                    <li>No types available</li>
                )}
            </ul>
            <h3>Abilities</h3>
            <ul>
                {pokemon.abilities.map((abilityObj) => (
                    <li key={abilityObj.ability.name}>{abilityObj.ability.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonComponent;
