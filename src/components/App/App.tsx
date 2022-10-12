import React, { ReactElement, useEffect, useState } from 'react'
import PokeData from '../../data/pokedeata'
import { getList } from '../../test-data'
import getPokemon from '../../data/get-pokemon'
import loadPokemon from '../../data/load-pokemon'
import Tab from '../Tab/Tab'
import Pokemon from '../Pokemon/Pokemon'

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

  const load = loadPokemon(pokemon, setPokemon)
  const articles = pokemon.map(data => (<Pokemon key={data.pokedex} data={data} load={load} />))

  return (
    <>
      <nav>
        <p>Sort by</p>
        <Tab label='Pokédex' active />
        <Tab label='A-Z' />
        <Tab label='Faves Only' />
      </nav>
      <div className='pokemon-list'>
        {articles}
      </div>
    </>
  )
}

export default App
