import React, { ReactElement } from 'react'

interface PokemonTypeIconProps {
  type: string
}

function PokemonTypeIcon ({ type }: PokemonTypeIconProps): ReactElement {
  const types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting',
    'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison',
    'psychic', 'rock', 'steel', 'water']
  const capitalized = type.substring(0, 1).toUpperCase() + type.substring(1)
  const display = types.includes(type) ? type : 'normal'
  return (<img src={`types/${display}.svg`} alt={`${capitalized} type Pokémon`} />)
}

export default PokemonTypeIcon
