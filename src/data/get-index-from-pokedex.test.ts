import { getList } from '../test-data'
import getIndexFromPokedex from './get-index-from-pokedex'

describe('getIndexFromPokedex', () => {
  it('returns the array index for the Pokémon in the array with the given Pokédex', () => {
    expect(getIndexFromPokedex(getList(), 4)).toEqual(1)
  })
})
