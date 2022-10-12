import { getPokemon } from '../test-data'
import savePokemon from './save-pokemon'

describe('savePokemon', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('saves Pokémon to local storage', async () => {
    const bulbasaur = getPokemon(1)
    await savePokemon([bulbasaur])
    const after = JSON.parse(localStorage.getItem('pokemon') ?? '[]')
    expect(after).toHaveLength(1)
    expect(JSON.stringify(after[0])).toEqual(JSON.stringify(bulbasaur))
  })
})
