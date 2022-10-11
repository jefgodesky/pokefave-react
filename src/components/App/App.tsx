import React, { ReactElement } from 'react'
import Tab from '../Tab/Tab'

function App (): ReactElement {
  return (
    <nav>
      <Tab label='Pokédex' active />
      <Tab label='A-Z' />
      <Tab label='Faves Only' />
    </nav>
  )
}

export default App
