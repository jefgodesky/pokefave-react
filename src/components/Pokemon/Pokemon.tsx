import React, { ReactElement, useRef, MutableRefObject } from 'react'
import useOnScreen from '../../hooks/use-on-screen'
import PokeData from '../../data/pokedeata'

interface PokemonProps {
  data: PokeData
  load: Function
}

function Pokemon ({ data, load }: PokemonProps): ReactElement {
  const { loaded, pokedex, name } = data
  const ref = useRef<HTMLElement>() as MutableRefObject<HTMLElement>
  const isVisible = useOnScreen(ref)
  if (isVisible && !loaded) load(data)

  return (
    <article ref={ref}>
      <p className='pokedex'>#{pokedex.toString().padStart(3, '0')}</p>
      <h2>{name}</h2>
    </article>
  )
}

export default Pokemon
