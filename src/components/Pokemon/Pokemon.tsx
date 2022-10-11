import React, { ReactElement } from 'react'
import PokeData from '../../data/pokedeata'

interface PokemonProps {
  data: PokeData
}

function Pokemon ({ data }: PokemonProps): ReactElement {
  const { pokedex, name } = data

  return (
    <article>
      <p className='pokedex'>#{pokedex.toString().padStart(3, '0')}</p>
      <h2>{name}</h2>
    </article>
  )
}

export default Pokemon
