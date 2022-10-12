import sortByPokedex from './sort-by-pokedex'
import { getList } from '../test-data'

describe('sortByPokedex', () => {
  it('sorts the list by Pokédex', () => {
    expect(sortByPokedex(getList()).map(data => data.pokedex)).toEqual([1, 4, 7])
  })

  it('works on a copy', () => {
    const list = getList()
    const sorted = sortByPokedex(list)
    expect(list).not.toBe(sorted)
  })
})
