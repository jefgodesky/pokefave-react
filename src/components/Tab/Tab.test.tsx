import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tab from './Tab'

describe('Tab', () => {
  it('displays the tab', () => {
    render(<Tab label='Test' onClick={() => {}} />)
    const tab = screen.getByText(/test/i)
    expect(tab).toBeInTheDocument()
  })

  it('marks an active tab', () => {
    render(<Tab label='Test' active onClick={() => {}} />)
    const tab = screen.getByText(/test/i)
    expect(tab).toHaveClass('active')
  })

  it('runs the click prop when clicked', () => {
    const mock = jest.fn()
    const { container } = render(<Tab label='Test' onClick={mock} />)
    const btn = container.querySelector('button')
    userEvent.click(btn as Element)
    expect(mock).toHaveBeenCalled()
  })
})
