import { axiosInstance } from "../api/axiosInstance";

export const getPokmonImg = (sprites) => {

    const firstOption = sprites.other.dream_world.front_default;
    const secondOption = sprites.other['official-artwork'].front_default;
    const thirdOption = sprites.other.home.front_default;

    if (firstOption) return firstOption;
    if (secondOption) return secondOption;
    if (thirdOption) return thirdOption;
}

export const getPokemonById = async (id) => {
    try {
        const res = await axiosInstance.get(`pokemon/${id}`);
        const pokemonData = res.data;

        const adaptedPokemon = {
          name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1),
          types: pokemonData.types.map(typeInfo => typeInfo.type.name),
          stats: pokemonData.stats.map(statInfo => ({
            name: statInfo.stat.name, 
            value: statInfo.base_stat,
          })),
          image: getPokmonImg(pokemonData.sprites),
          abilities: pokemonData.abilities.map(abilityInfo => abilityInfo.ability.name),
          height: pokemonData.height,
          weight: pokemonData.weight,
        };
        return adaptedPokemon;
    } catch (error) {
        console.error(error);
    }
}