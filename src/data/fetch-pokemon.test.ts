import mockAxios from 'jest-mock-axios'
import { getPokemon } from '../test-data'
import fetchPokemon from './fetch-pokemon'

describe('fetchPokemon', () => {
  let bulbasaur = getPokemon(1)
  const catchFn = jest.fn()
  const thenFn = jest.fn()

  afterEach(() => {
    bulbasaur = getPokemon(1)
    localStorage.clear()
    mockAxios.reset()
  })

  it('fills in additional information from API', async () => {
    await fetchPokemon(bulbasaur).then(thenFn).catch(catchFn)
    expect(mockAxios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1')
    expect(thenFn.mock.calls[0][0].loaded).toEqual(true)
    expect(thenFn.mock.calls[0][0]).not.toBe(bulbasaur)
  })
})
