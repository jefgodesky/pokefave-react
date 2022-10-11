import React from 'react'
import { render, screen } from '@testing-library/react'
import { getPokemon } from '../../test-data'
import Pokemon from './Pokemon'

describe('Pokemon', () => {
  const bulbasaur = getPokemon(1)

  it('displays the Pokédex number', () => {
    render(<Pokemon data={bulbasaur} />)
    const pokedex = screen.getByText('#001')
    expect(pokedex).toBeInTheDocument()
    expect(pokedex).toHaveClass('pokedex')
  })

  it('presents the Pokémon\'s name', () => {
    render(<Pokemon data={bulbasaur} />)
    const name = screen.getByText('Bulbasaur')
    expect(name).toBeInTheDocument()
  })
})
