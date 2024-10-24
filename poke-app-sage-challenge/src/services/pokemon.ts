import axios from 'axios';

interface Ability {
    ability: {
      name: string;
      url: string;
    };
  }

  interface Form {
    name: string;
    url: string;
  }

  interface Stat {
    base_stat: number;
    effort: number;
    stat: {
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
    abilities: Ability[]; 
    types: Type[]
  }

export interface Pokemon {
    name: string;
    sprites: {
      front_default: string;
    };
    height: number;
    weight: number;
    abilities: Ability[];
    types: Type[]; 
  }

export const getPokemonList = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
    return response.data.results;
  } catch (error) {
    throw new Error('Error fetching Pokemon list');
  }
};

export const getPokemonById = async (id: number): Promise<Pokemon> => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching Pokémon');
    }
};

export const getPokemonByName = async (name: string) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching details for Pokémon: ${name}`);
    }
  };
