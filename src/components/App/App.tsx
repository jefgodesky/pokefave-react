import React, { ReactElement, useEffect, useState } from 'react'
import PokeData from '../../data/pokedeata'
import { getList } from '../../test-data'
import getPokemon from '../../data/get-pokemon'
import loadPokemon from '../../data/load-pokemon'
import toggleFave from '../../data/toggle-fave'
import sortByPokedex from '../../data/sort-by-pokedex'
import sortByName from '../../data/sort-by-name'
import Tab from '../Tab/Tab'
import Pokemon from '../Pokemon/Pokemon'

interface AppProps {
  testing?: boolean
}

function App ({ testing }: AppProps): ReactElement {
  const [pokemon, setPokemon] = useState<PokeData[]>([])
  const [sortOrder, setSortOrder] = useState<string>('pokedex')
  const load = loadPokemon(pokemon, setPokemon)
  const toggle = toggleFave(pokemon, setPokemon)

  useEffect(() => {
    if (testing === true) {
      setPokemon(getList())
    } else {
      getPokemon().then(data => setPokemon(data)).catch(() => setPokemon([]))
    }
  }, [testing])

  const sort = (fn: Function, order: string): void => {
    setPokemon(fn(pokemon))
    setSortOrder(order)
  }

  const list = sortOrder === 'faves' ? pokemon.filter(pokemon => pokemon.isFavorite) : pokemon
  const articles = list.map(data => (<Pokemon key={data.pokedex} data={data} load={load} toggle={toggle} />))

  return (
    <>
      <nav>
        <p>Sort by</p>
        <Tab label='Pokédex' active={sortOrder === 'pokedex'} onClick={() => { sort(sortByPokedex, 'pokedex') }} />
        <Tab label='A-Z' active={sortOrder === 'az'} onClick={() => { sort(sortByName, 'az') }} />
        <Tab label='Faves Only' active={sortOrder === 'faves'} onClick={() => { sort(sortByName, 'faves') }} />
      </nav>
      <div className='pokemon-list'>
        {articles}
      </div>
    </>
  )
}

export default App
