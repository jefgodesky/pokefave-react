import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      disconnect: () => null
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('renders the Pokédex sorting button', () => {
    render(<App testing />)
    const btn = screen.getByText('Pokédex')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('active')
  })

  it('renders the A-Z sorting button', () => {
    render(<App testing />)
    const btn = screen.getByText('A-Z')
    expect(btn).toBeInTheDocument()
    expect(btn).not.toHaveClass('active')
  })

  it('renders the Faves Only sorting button', () => {
    render(<App testing />)
    const btn = screen.getByText('Faves Only')
    expect(btn).toBeInTheDocument()
    expect(btn).not.toHaveClass('active')
  })

  it('lists our Pokémon', () => {
    render(<App testing />)
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('Charmander')).toBeInTheDocument()
    expect(screen.getByText('Squirtle')).toBeInTheDocument()
  })

  it('marks a Pokémon as favorite when clicked', () => {
    render(<App testing />)
    const bulbasaur = screen.getByText('Bulbasaur')
    const btn = bulbasaur.parentElement?.querySelector('button.fave')
    userEvent.click(btn as Element)
    expect(btn).toHaveClass('is-fave')
  })

  it('sorts by Pokédex', () => {
    render(<App testing />)
    const pokedex = screen.getByText('Pokédex')
    userEvent.click(pokedex as Element)
    expect(pokedex).toHaveClass('active')
  })

  it('sorts by name', () => {
    render(<App testing />)
    const az = screen.getByText('A-Z')
    userEvent.click(az as Element)
    expect(az).toHaveClass('active')
  })

  it('filters to just favorites', () => {
    render(<App testing />)
    const faves = screen.getByText('Faves Only')
    userEvent.click(faves as Element)
    expect(faves).toHaveClass('active')
  })
})
