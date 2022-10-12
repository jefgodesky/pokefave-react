import PokeData from './pokedeata'

/**
 * Saves an array of `PokeData` to local storage. This is a fairly simple
 * operation, but we’re going to call it several times, so it’s a good idea to
 * put it in one place, just in case we want to change something about how we
 * do this in the future.
 * @param {PokeData[]} pokemon - An array of `PokeData` objects that we’d like
 *   to save to local storage.
 */

const savePokemon = (pokemon: PokeData[]): void => {
  localStorage.setItem('pokemon', JSON.stringify(pokemon))
}

export default savePokemon
