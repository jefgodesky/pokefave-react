import PokeData from './pokedeata'

/**
 * Sort an array of `PokeData` objects alphabetically by their `name`
 * properties. This method creates a copy of the original array so it can be
 * used by immutable functions.
 * @param {PokeData[]} arr - An array of `PokeData` objects to be sorted.
 * @returns {PokeData[]} - A copy of the array given (`arr`), but with the
 *   `PokeData` objects contained sorted alphabetically by their `name`
 *   properties.
 */

const sortByName = (arr: PokeData[]): PokeData[] => {
  const copy = [...arr]
  copy.sort((a, b) => a.name.localeCompare(b.name))
  return copy
}

export default sortByName
