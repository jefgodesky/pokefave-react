import PokeData from './pokedeata'
import fetchPokemon from './fetch-pokemon'
import getIndexFromPokedex from './get-index-from-pokedex'
import savePokemon from './save-pokemon'

const loadPokemon = (pokemon: PokeData[], setter: Function): Function => {
  return async (data: PokeData): Promise<void> => {
    const update = await fetchPokemon(data)
    update.loaded = true
    pokemon[getIndexFromPokedex(pokemon, data.pokedex)] = update
    savePokemon(pokemon)
    setter([...pokemon])
  }
 }

 export default loadPokemon
