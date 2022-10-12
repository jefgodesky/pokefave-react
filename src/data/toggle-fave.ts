import PokeData from './pokedeata'
import getIndexFromPokedex from './get-index-from-pokedex'
import savePokemon from './save-pokemon'

/**
 * This is a thunk that returns a function that the `App` component can pass
 * to its `Pokemon` component children to toggle the favorite status.
 * @param {PokeData[]} pokemon - The array of `PokeData` objects that the `App`
 *   manages as its state.
 * @param {Function} setter - The method that the `App` component uses to set
 *   its state.
 * @returns {Function} - A function that the `App` component can pass to each
 *   of its `Pokemon` component children as its `toggle` prop. This is called
 *   when the user clicks the `Fave` component to toggle that Pokémon’s status
 *   as a favorite or not.
 */

const toggleFave = (pokemon: PokeData[], setter: Function): Function => {
  return async (data: PokeData): Promise<void> => {
    const index = getIndexFromPokedex(pokemon, data.pokedex)
    pokemon[index].isFavorite = !pokemon[index].isFavorite
    savePokemon(pokemon)
    setter([...pokemon])
  }
}

export default toggleFave
