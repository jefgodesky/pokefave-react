import React from 'react'
import { render } from '@testing-library/react'
import PokemonTypeIcon from './PokemonTypeIcon'

describe('PokemonTypeIcon', () => {
  it('displays the icon', () => {
    const { container } = render(<PokemonTypeIcon type='electric' />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', 'types/electric.svg')
    expect(img).toHaveAttribute('alt', 'Electric type Pokémon')
  })

  it('defaults to normal if given bad input', () => {
    const { container } = render(<PokemonTypeIcon type='full-stack developer' />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', 'types/normal.svg')
    expect(img).toHaveAttribute('alt', 'Full-stack developer type Pokémon')
  })
})
