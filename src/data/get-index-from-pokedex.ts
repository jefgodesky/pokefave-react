import PokeData from './pokedeata'

const getIndexFromPokedex = (arr: PokeData[], pokedex: number): number => {
  return arr.findIndex(item => item.pokedex === pokedex)
}

export default getIndexFromPokedex
