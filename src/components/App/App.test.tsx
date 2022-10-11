import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const h1 = screen.getByText(/what’s your favorite pokémon?/i)
  expect(h1).toBeInTheDocument()
})
