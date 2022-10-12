import sortByName from './sort-by-name'
import { getList } from '../test-data'

describe('sortByName', () => {
  it('sorts the list alphabetically by name', () => {
    expect(sortByName(getList()).map(data => data.name)).toEqual(['Bulbasaur', 'Charmander', 'Squirtle'])
  })

  it('works on a copy', () => {
    const list = getList()
    const sorted = sortByName(list)
    expect(list).not.toBe(sorted)
  })
})
