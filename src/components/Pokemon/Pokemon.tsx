import React, { ReactElement, useRef, MutableRefObject } from 'react'
import useOnScreen from '../../hooks/use-on-screen'
import PokeData from '../../data/pokedeata'
import Fave from '../Fave/Fave'
import PokemonTypeIcon from '../PokemonTypeIcon/PokemonTypeIcon'

interface PokemonProps {
  data: PokeData
  load: Function
}

function Pokemon ({ data, load }: PokemonProps): ReactElement {
  const { loaded, pokedex, name, image, types, isFavorite } = data
  const ref = useRef<HTMLElement>() as MutableRefObject<HTMLElement>
  const isVisible = useOnScreen(ref)
  if (isVisible && !loaded) load(data)
  const icons = types.map(type => (<li key={`${pokedex}-${type}`}><PokemonTypeIcon type={type} /></li>))

  return (
    <article ref={ref} className={types[0] ?? 'normal'}>
      <img src={image ?? 'pokeball.png'} alt={name} />
      <Fave active={isFavorite} />
      <p className='pokedex'>#{pokedex.toString().padStart(3, '0')}</p>
      <h2>{name}</h2>
      <ul className='types'>
        {icons}
      </ul>
    </article>
  )
}

export default Pokemon
