import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon?";

export const GetPokemons = async (limit: number) => {
  try {
    const response = await axios.get(`${url}limit=${limit}`);
    const data = await response.data.results;
    const results = await Promise.all(
      data.map(async (pokemon: string | any) => {
        const response = await axios.get(pokemon.url);
        return response.data;
      })
    );
    return results;
  } catch (error) {
    console.log(error);
  }
};
