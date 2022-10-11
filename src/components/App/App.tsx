import React, { ReactElement, useEffect, useState } from 'react'
import PokeData from '../../data/pokedeata'
import { getList } from '../../test-data'
import getPokemon from '../../data/get-pokemon'
import Tab from '../Tab/Tab'

interface AppProps {
  testing?: boolean
}

function App ({ testing }: AppProps): ReactElement {
  const [pokemon, setPokemon] = useState<PokeData[]>([])

  useEffect(() => {
    if (testing === true) {
      setPokemon(getList())
    } else {
      getPokemon().then(data => setPokemon(data)).catch(() => setPokemon([]))
    }
  }, [testing])

  return (
    <>
      <nav>
        <p>Sort by</p>
        <Tab label='Pokédex' active />
        <Tab label='A-Z' />
        <Tab label='Faves Only' />
      </nav>
      <p>{pokemon.length} Pokémon</p>
    </>
  )
}

export default App
