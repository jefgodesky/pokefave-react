import { getPokemon } from '../test-data'
import { isPokeData, isPokeDataArray } from './pokedeata'

describe('isPokeData', () => {
  let base: any = {}

  beforeEach(() => {
    base = getPokemon(1)
  })

  it('accepts the base object above', () => {
    expect(isPokeData(base)).toEqual(true)
  })

  it('accepts true for loaded', () => {
    base.loaded = true
    expect(isPokeData(base)).toEqual(true)
  })

  it('rejects a string for loaded', () => {
    base.loaded = 'false'
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects a number for loaded', () => {
    base.loaded = 0
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects an array for loaded', () => {
    base.loaded = []
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects an object for loaded', () => {
    base.loaded = { status: false }
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects false for pokedex', () => {
    base.pokedex = false
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects true for pokedex', () => {
    base.pokedex = true
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects a string for pokedex', () => {
    base.pokedex = '1'
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects an array for pokedex', () => {
    base.pokedex = []
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects an object for pokedex', () => {
    base.pokedex = { value: 1 }
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects false for name', () => {
    base.name = false
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects true for name', () => {
    base.name = true
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects a number for name', () => {
    base.name = 1
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects an array for name', () => {
    base.name = []
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects an object for name', () => {
    base.name = { value: 'Bulbasaur' }
    expect(isPokeData(base)).toEqual(false)
  })

  it('accepts a string for image', () => {
    base.image = '/path/to/image.png'
    expect(isPokeData(base)).toEqual(true)
  })

  it('rejects false for image', () => {
    base.image = false
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects true for image', () => {
    base.image = true
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects a number for image', () => {
    base.image = 1
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects an array for image', () => {
    base.image = []
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects an object for image', () => {
    base.image = { value: '/path/to/image.png' }
    expect(isPokeData(base)).toEqual(false)
  })

  it('accepts true for isFavorite', () => {
    base.isFavorite = true
    expect(isPokeData(base)).toEqual(true)
  })

  it('rejects a string for isFavorite', () => {
    base.isFavorite = 'false'
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects a number for isFavorite', () => {
    base.isFavorite = 0
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects an array for isFavorite', () => {
    base.isFavorite = []
    expect(isPokeData(base)).toEqual(false)
  })

  it('rejects an object for isFavorite', () => {
    base.isFavorite = { status: false }
    expect(isPokeData(base)).toEqual(false)
  })
})

describe('isPokeDataArray', () => {
  let bulbasaur = getPokemon(1)
  let charmander = getPokemon(4)

  beforeEach(() => {
    bulbasaur = getPokemon(1)
    charmander = getPokemon(4)
  })

  it('rejects null', () => {
    expect(isPokeDataArray(null)).toEqual(false)
  })

  it('rejects undefined', () => {
    expect(isPokeDataArray(undefined)).toEqual(false)
  })

  it('rejects true', () => {
    expect(isPokeDataArray(true)).toEqual(false)
  })

  it('rejects false', () => {
    expect(isPokeDataArray(false)).toEqual(false)
  })

  it('rejects a number', () => {
    expect(isPokeDataArray(1)).toEqual(false)
  })

  it('rejects a string', () => {
    expect(isPokeDataArray('bulbasaur, charmander')).toEqual(false)
  })

  it('rejects an object', () => {
    expect(isPokeDataArray({ bulbasaur, charmander })).toEqual(false)
  })

  it('accept an array of PokeData', () => {
    expect(isPokeDataArray([bulbasaur, charmander])).toEqual(true)
  })

  it('rejects an array with true', () => {
    expect(isPokeDataArray([bulbasaur, charmander, true])).toEqual(false)
  })

  it('rejects an array with false', () => {
    expect(isPokeDataArray([bulbasaur, charmander, false])).toEqual(false)
  })

  it('rejects an array with a number', () => {
    expect(isPokeDataArray([bulbasaur, charmander, 1])).toEqual(false)
  })

  it('rejects an array with a string', () => {
    expect(isPokeDataArray([bulbasaur, charmander, 'eevee'])).toEqual(false)
  })

  it('rejects an array with an array', () => {
    expect(isPokeDataArray([bulbasaur, [charmander]])).toEqual(false)
  })

  it('rejects an array with any other object', () => {
    expect(isPokeDataArray([bulbasaur, { charmander }])).toEqual(false)
  })
})
