import React from 'react'
import { render, screen } from '@testing-library/react'
import Tab from './Tab'

describe('Tab', () => {
  it('displays the tab', () => {
    render(<Tab label='Test' />)
    const tab = screen.getByText(/test/i)
    expect(tab).toBeInTheDocument()
  })

  it('marks an active tab', () => {
    render(<Tab label='Test' active />)
    const tab = screen.getByText(/test/i)
    expect(tab).toHaveClass('active')
  })
})
