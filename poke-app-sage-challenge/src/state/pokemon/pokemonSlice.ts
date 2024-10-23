import { createSlice } from "@reduxjs/toolkit";

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

interface PokemonState {
    name: string;
    sprites: {
      front_default: string;
    };
    height: number;
    weight: number;
    types: Type[],
    abilities: Ability[];
}

const initialState: PokemonState = {
    name: "",
    sprites: {
        front_default: "",
      },
      height: 0,
      weight: 0,
      types: [],
      abilities: []
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        pokemonName: (state) => {
            state.name;
        },
        pokemonSprites: (state) => {
            state.sprites;
        },
        pokemonHeight: (state) => {
            state.height;
        },
        pokemonWeight: (state) => {
            state.weight;
        },
        pokemonTypes: (state) => {
            state.types;
        },
        pokemonAbilities: (state) => {
            state.abilities;
        },
    },
});

export const { pokemonName, pokemonSprites, pokemonHeight, pokemonWeight, pokemonTypes, pokemonAbilities} = pokemonSlice.actions;

export default pokemonSlice.reducer;