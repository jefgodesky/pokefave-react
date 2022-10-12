import React from 'react'
import { render, screen } from '@testing-library/react'
import { getPokemon } from '../../test-data'
import Pokemon from './Pokemon'

describe('Pokemon', () => {
  const bulbasaur = getPokemon(1)

  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      disconnect: () => null
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('displays the Pokédex number', () => {
    render(<Pokemon data={bulbasaur} load={() => {}} />)
    const pokedex = screen.getByText('#001')
    expect(pokedex).toBeInTheDocument()
    expect(pokedex).toHaveClass('pokedex')
  })

  it('presents the Pokémon\'s name', () => {
    render(<Pokemon data={bulbasaur} load={() => {}} />)
    const name = screen.getByText('Bulbasaur')
    expect(name).toBeInTheDocument()
  })
})
