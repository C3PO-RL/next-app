import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (param: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${param}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
