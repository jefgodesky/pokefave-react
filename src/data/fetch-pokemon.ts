import axios from 'axios'
import rfdc from 'rfdc'
import PokeData from './pokedeata'

const clone = rfdc()

/**
 * This method returns a deep copy of the PokeData that it is given after
 * (potentially) updating it with further details from the PokéAPI. We don’t
 * want to bombard the API over and over again, so PokeData objects have a
 * boolean flag called `loaded` to tell us if we’ve requested more details for
 * this Pokémon from the PokéAPI before. If given a PokeData where `loaded` is
 * equal to `true`, this method will just return a deep copy of the PokeData
 * that it was given. If not, though, it will make a request to the PokéAPI
 * for more details. If successful, this will fill in the types and official
 * artwork for the Pokémon. Successful or not, we set `loaded` to `true` to
 * mark that we’ve already asked once, so we don’t want to ask again.
 * @param {PokeData} pokemon - A PokeData object for the Pokémon that we’d like
 *   to get more details about.
 * @returns {PokeData} - A deep copy of the PokeData that the method was given,
 *   but potentially updated with more details from the PokéAPI.
 */

const fetchPokemon = async (pokemon: PokeData): Promise<PokeData> => {
  const update = clone(pokemon)
  if (pokemon.loaded) return update
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${update.pokedex}`)
  update.loaded = true
  update.image = response?.data.sprites.other['official-artwork'].front_default
  update.types = response?.data.types.map((type: any) => type.type.name)
  return update
}

export default fetchPokemon
