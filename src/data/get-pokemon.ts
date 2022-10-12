import axios from 'axios'
import PokeData, { isPokeDataArray } from './pokedeata'

interface PokeAPIResult {
  name: string
  url: string
}

/**
 * The PokéAPI actually _doesn’t_ give us a Pokédex number; it gives us the URL
 * to make a call to the Pokémon item resource. This method takes that URL and
 * returns the Pokédex number from it.
 * @param {string} url - The URL for a PokéAPI Pokémon item resource.
 * @returns {number} - The Pokédex extracted from the URL.
 */

const getPokedexFromURL = (url: string): number => {
  const matches = url.match(/\/pokemon\/(\d*?)\/?$/)
  if (matches === null || matches.length < 1) return 0
  const n = parseInt(matches[1])
  return isNaN(n) ? 0 : n
}

/**
 * The PokéAPI actually _doesn’t_ give us the Pokémon’s name; it gives us a
 * slug. We’re assuming that we can reverse the slug to a name pretty easily,
 * by replacing dashes with spaces and capitalizing each word we get. If we
 * find any instances of that not working, we’ll have to revisit the logic
 * used in this method.
 * @param {string} slug - The slug provided as a name by the PokéAPI.
 * @return {string} - Our best attempt to reconstruct a name from the slug that
 *   we were given.
 */

const getNameFromSlug = (slug: string): string => slug
  .split('-')
  .map((str: string) => str.substring(0, 1).toUpperCase() + str.substring(1))
  .join(' ')

/**
 * Map the record given to us by the PokéAPI into a PokeData object.
 * @param {PokeAPIResult} result - A result from the PokéAPI.
 * @param {string} result.name - The slug provided as a name by the PokéAPI.
 * @param {string} result.url - The URL for a PokéAPI Pokémon item resource.
 * @returns {PokeData} - A PokeData object derived from the PokeAPIResult that
 *   was provided.
 */

const mapPokemonRecord = (result: PokeAPIResult): PokeData => ({
  loaded: false,
  pokedex: getPokedexFromURL(result.url),
  name: getNameFromSlug(result.name),
  types: [],
  isFavorite: false
})

/**
 * First checks local storage. If it can’t find any Pokémon there, makes a
 * request to the PokéAPI, transforms the results into an array of PokeData,
 * and returns that.
 * @returns {Promise<PokeData[]>} - A Promise that resolves with an array of
 *   PokeData objects.
 */

const getPokemon = async (): Promise<PokeData[]> => {
  const cacheStr = localStorage.getItem('pokemon')
  const cache = cacheStr !== null ? JSON.parse(cacheStr) : []
  if (isPokeDataArray(cache) && cache.length > 0) return cache
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const data = response.data.results.map(mapPokemonRecord)
  if (!isPokeDataArray(data)) return []
  localStorage.setItem('pokemon', JSON.stringify(data))
  return data
}

export default getPokemon
export { getPokedexFromURL, getNameFromSlug, mapPokemonRecord }
