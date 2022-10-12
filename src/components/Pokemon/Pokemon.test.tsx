import React from 'react'
import { render, screen } from '@testing-library/react'
import { getPokemon } from '../../test-data'
import Pokemon from './Pokemon'
import PokemonTypeIcon from "../PokemonTypeIcon/PokemonTypeIcon";

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

  it('renders type icons', () => {
    const squirtle = getPokemon(7)
    render(<Pokemon data={squirtle} load={() => {}} />)
    const icon = screen.getByAltText('Water type Pokémon')
    expect(icon).toBeInTheDocument()
  })

  it('renders fave icon', () => {
    const { container } = render(<Pokemon data={bulbasaur} load={() => {}} />)
    const btn = container.querySelector('button')
    expect(btn).toHaveClass('fave')
    expect(btn).not.toHaveClass('is-fave')
  })

  it('indicates that this is one of your favorite Pokémon', () => {
    bulbasaur.isFavorite = true
    const { container } = render(<Pokemon data={bulbasaur} load={() => {}} />)
    const btn = container.querySelector('button')
    expect(btn).toHaveClass('fave')
    expect(btn).toHaveClass('is-fave')
  })
})
