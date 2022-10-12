import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Fave from './Fave'

describe('Fave', () => {
  it('displays the star SVG', () => {
    const { container } = render(<Fave onClick={() => {}} />)
    const btn = container.querySelector('button')
    expect(btn).not.toEqual(null)
    expect(btn).not.toHaveClass('is-fave')
  })

  it('marks your faves', () => {
    const { container } = render(<Fave active onClick={() => {}} />)
    const btn = container.querySelector('button')
    expect(btn).not.toEqual(null)
    expect(btn).toHaveClass('is-fave')
  })

  it('pops', () => {
    const { container } = render(<Fave active onClick={() => {}} />)
    const btn = container.querySelector('button')
    expect(btn).not.toEqual(null)
    expect(btn).toHaveClass('animate__animated')
    expect(btn).toHaveClass('animate__tada')
  })

  it('runs the click prop when clicked', () => {
    const mock = jest.fn()
    const { container } = render(<Fave active onClick={mock} />)
    const btn = container.querySelector('button')
    userEvent.click(btn as Element)
    expect(mock).toHaveBeenCalled()
  })
})
