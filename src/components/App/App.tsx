import React, { ReactElement } from 'react'
import Tab from '../Tab/Tab'

function App (): ReactElement {
  return (
    <nav>
      <Tab label='Pokédex' active />
    </nav>
  )
}

export default App
