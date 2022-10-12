import PokeData from './pokedeata'
import fetchPokemon from './fetch-pokemon'
import getIndexFromPokedex from './get-index-from-pokedex'
import savePokemon from './save-pokemon'

/**
 * This is a thunk that returns a function that the `App` component can pass
 * to its `Pokemon` component children to call for more detailed information on
 * their Pokémon when they scroll into view.
 * @param {PokeData[]} pokemon - The array of `PokeData` objects that the `App`
 *   manages as its state.
 * @param {Function} setter - The method that the `App` component uses to set
 *   its state.
 * @returns {Function} - A function that the `App` component can pass to each
 *   of its `Pokemon` component children as its `load` prop. This is called
 *   when the Pokémon scrolls into view if we have not yet requested more
 *   defailted information on this Pokémon from the PokéAPI.
 */

const loadPokemon = (pokemon: PokeData[], setter: Function): Function => {
  return async (data: PokeData): Promise<void> => {
    const index = getIndexFromPokedex(pokemon, data.pokedex)
    if (index < 0 || pokemon[index].loaded) return
    pokemon[index].loaded = true
    pokemon[index] = await fetchPokemon(data)
    savePokemon(pokemon)
    setter([...pokemon])
  }
}

export default loadPokemon
