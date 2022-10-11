import PokeData from './pokedeata'

/**
 * This is a utility function that returns the index of the `PokeData` in the
 * array that has the given Pokédex.
 * @param {PokeData[]} arr - An array of `PokeData` objects to search through.
 * @param {number} pokedex - The Pokédex number to search for.
 * @returns {number} - The index of the `PokeData` object with the given
 *   Pokédex number if it is in the array. If it is not in the array, the
 *   method returns -1.
 */

const getIndexFromPokedex = (arr: PokeData[], pokedex: number): number => {
  return arr.findIndex(item => item.pokedex === pokedex)
}

export default getIndexFromPokedex
