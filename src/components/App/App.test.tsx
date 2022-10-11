import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
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

  it('tells us how many Pokémon we have', () => {
    render(<App testing />)
    const count = screen.getByText('3 Pokémon')
    expect(count).toBeInTheDocument()
  })
})
