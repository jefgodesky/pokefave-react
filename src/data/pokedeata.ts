interface PokeData {
  loaded: boolean
  pokedex: number
  name: string
  image?: string
  types: string[]
  isFavorite: boolean
}

const isPokeData = (obj: any): obj is PokeData => {
  const { loaded, pokedex, name, image, types, isFavorite } = obj
  const loadedPass: boolean = loaded === true || loaded === false
  const pokedexPass: boolean = typeof pokedex === 'number'
  const namePass: boolean = typeof name === 'string'
  const imagePass: boolean = image === undefined || typeof image === 'string'
  const typesPass: boolean = Array.isArray(types) && types.reduce((acc: boolean, curr) => acc && typeof curr === 'string', true)
  const favePass: boolean = isFavorite === true || isFavorite === false
  return loadedPass && pokedexPass && namePass && imagePass && typesPass && favePass
}

const isPokeDataArray = (obj: any): obj is PokeData[] => {
  if (obj === null || obj === undefined) return false
  if (!Array.isArray(obj)) return false
  return obj.map(item => isPokeData(item)).reduce((acc, curr) => acc && curr, true)
}

export default PokeData
export { isPokeData, isPokeDataArray }
