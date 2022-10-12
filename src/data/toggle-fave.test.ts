import PokeData from './pokedeata'
import toggleFave from './toggle-fave'
import { getList } from '../test-data'

describe('toggleFave', () => {
  let list = getList()
  let pokemon = list[0]

  afterEach(() => {
    list = getList()
    pokemon = list[0]
  })

  it('marks a Pokémon that’s not a favorite as a favorite', async () => {
    const fn = toggleFave(list, (arr: PokeData[]) => { list = arr })
    await fn(pokemon)
    expect(list[0].isFavorite).toEqual(true)
  })

  it('marks a Pokémon that is a favorite as not', async () => {
    list[0].isFavorite = true
    const fn = toggleFave(list, (arr: PokeData[]) => { list = arr })
    await fn(pokemon)
    expect(list[0].isFavorite).toEqual(false)
  })
})
