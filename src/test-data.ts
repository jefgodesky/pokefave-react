import rfdc from 'rfdc'
import PokeData from './data/pokedeata'

const clone = rfdc()

const squirtle = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'

const pokemon = [
  { loaded: false, pokedex: 1, name: 'Bulbasaur', types: [], isFavorite: false },
  { loaded: false, pokedex: 4, name: 'Charmander', types: [], isFavorite: true },
  { loaded: true, pokedex: 7, name: 'Squirtle', image: squirtle, types: ['water'], isFavorite: false }
]

const getPokemon = (pokedex: number): PokeData => {
  const filtered = pokemon.filter(pokemon => pokemon.pokedex === pokedex)
  if (filtered.length > 0) return clone(filtered[0])
  return clone(pokemon[0])
}

const getList = (): PokeData[] => {
  return JSON.parse(JSON.stringify(pokemon))
}

export { getPokemon, getList }
