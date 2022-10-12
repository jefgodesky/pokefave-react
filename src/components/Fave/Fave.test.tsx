import React from 'react'
import { render } from '@testing-library/react'
import Fave from './Fave'

describe('Fave', () => {
  it('displays the star SVG', () => {
    const { container } = render(<Fave />)
    const svg = container.querySelector('svg')
    expect(svg).not.toEqual(null)
    expect(svg?.parentElement).not.toHaveClass('is-fave')
  })

  it('marks your faves', () => {
    const { container } = render(<Fave active />)
    const svg = container.querySelector('svg')
    expect(svg).not.toEqual(null)
    expect(svg?.parentElement).toHaveClass('is-fave')
  })

  it('pops', () => {
    const { container } = render(<Fave active />)
    const svg = container.querySelector('svg')
    expect(svg).not.toEqual(null)
    expect(svg?.parentElement).toHaveClass('animate__animated')
    expect(svg?.parentElement).toHaveClass('animate__tada')
  })
})
