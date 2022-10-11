import mockAxios from 'jest-mock-axios'
import { getList } from '../test-data'
import api from './api'
import { isPokeData } from './pokedeata'
import getPokemon, { getPokedexFromURL, getNameFromSlug, mapPokemonRecord } from './get-pokemon'

describe('getPokemon', () => {
  const catchFn = jest.fn()
  const thenFn = jest.fn()

  afterEach(() => {
    localStorage.clear()
    mockAxios.reset()
  })

  it('calls the API if there\'s nothing in local storage', async () => {
    await getPokemon().then(thenFn).catch(catchFn)
    expect(mockAxios.get).toHaveBeenCalledWith(`${api.base}pokemon?limit=100000&offset=0`)
  })

  it('doesn\'t call the API if there is something in local storage', async () => {
    localStorage.setItem('pokemon', JSON.stringify(getList()))
    await getPokemon().then(thenFn).catch(catchFn)
    expect(mockAxios.get).not.toHaveBeenCalled()
    expect(thenFn.mock.calls[0][0][0].loaded).toEqual(false)
    expect(thenFn.mock.calls[0][0][0].pokedex).toEqual(1)
    expect(thenFn.mock.calls[0][0][0].name).toEqual('Bulbasaur')
    expect(thenFn.mock.calls[0][0][0].types).toHaveLength(0)
    expect(thenFn.mock.calls[0][0][0].isFavorite).toEqual(false)
  })
})

describe('getPokedexFromURL', () => {
  it('extracts the Pokédex from the URL', () => {
    expect(getPokedexFromURL('https://pokeapi.co/api/v2/pokemon/1/')).toEqual(1)
  })

  it('returns 0 if there is no match', () => {
    expect(getPokedexFromURL('https://pokeapi.co/api/v2/pokemon/bulbasaur/')).toEqual(0)
  })
})

describe('getNameFromSlug', () => {
  it('reverses slugification', () => {
    expect(getNameFromSlug('jason-godesky')).toEqual('Jason Godesky')
  })
})

describe('mapPokemonRecord', () => {
  it('maps a PokéAPI record to PokeData', () => {
    const data = mapPokemonRecord({ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' })
    expect(isPokeData(data)).toEqual(true)
    expect(data.loaded).toEqual(false)
    expect(data.pokedex).toEqual(1)
    expect(data.name).toEqual('Bulbasaur')
    expect(data.image).toEqual(undefined)
    expect(Array.isArray(data.types)).toEqual(true)
    expect(data.types).toHaveLength(0)
    expect(data.isFavorite).toEqual(false)
  })
})
