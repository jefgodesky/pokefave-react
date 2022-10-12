import React from 'react'
import { render, screen } from '@testing-library/react'
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
})
