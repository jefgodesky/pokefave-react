import sortByPokedex from './sort-by-pokedex'
import { getList } from '../test-data'

describe('sortByPokedex', () => {
  it('sorts the list by Pokédex', () => {
    expect(sortByPokedex(getList()).map(data => data.pokedex)).toEqual([1, 4, 7])
  })
})
