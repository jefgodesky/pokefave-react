import mockAxios from 'jest-mock-axios'
import PokeData from './pokedeata'
import loadPokemon from './load-pokemon'
import { getList } from '../test-data'

describe('loadPokemon', () => {
  let list = getList()
  let pokemon = list[0]

  afterEach(() => {
    list = getList()
    pokemon = list[0]
    localStorage.clear()
    mockAxios.reset()
  })

  it('sets loaded to true', async () => {
    const fn = loadPokemon(list, (arr: PokeData[]) => { list = arr })
    await fn(pokemon)
    expect(list[0].loaded).toEqual(true)
  })

  it('doesn\'t call the API if loaded is true', async () => {
    pokemon.loaded = true
    const fn = loadPokemon(list, () => {})
    await fn(pokemon)
    expect(mockAxios.get).not.toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1')
  })

  it('fills in additional information from API', async () => {
    const fn = loadPokemon(list, () => {})
    await fn(pokemon)
    expect(mockAxios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1')
  })
})
