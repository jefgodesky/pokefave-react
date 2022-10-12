import PokeData from './pokedeata'

/**
 * Sort an array of `PokeData` objects by their `pokedex` properties. This
 * method creates a copy of the original array so it can be used by
 * immutable functions.
 * @param {PokeData[]} arr - An array of `PokeData` objects to be sorted.
 * @returns {PokeData[]} - A copy of the array given (`arr`), but with the
 *   `PokeData` objects contained sorted by their `pokedex` properties.
 */

const sortByPokedex = (arr: PokeData[]): PokeData[] => {
  const copy = [...arr]
  arr.sort((a, b) => a.pokedex - b.pokedex)
  return arr
}

export default sortByPokedex
