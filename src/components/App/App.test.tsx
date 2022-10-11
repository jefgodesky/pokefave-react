import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the Pokédex sorting button', () => {
    render(<App />)
    const btn = screen.getByText('Pokédex')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('active')
  })

  it('renders the A-Z sorting button', () => {
    render(<App />)
    const btn = screen.getByText('A-Z')
    expect(btn).toBeInTheDocument()
    expect(btn).not.toHaveClass('active')
  })
})
