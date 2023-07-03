import { useEffect, useState } from 'react'
// import './App.css'
import { ListAllPokemons } from '../fetchings/ListPokemons'
import { LazyPokes } from '../types/poke'

const CatalogOfPokemons = () => {
  const uri = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=30'
  const [data, setData] = useState<LazyPokes | undefined>()

  useEffect(() => {
    ListAllPokemons(uri).then((res) => setData(res))
  }, [data])

  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '5rem' }}
    >
      {!!data &&
        data.results.map((pokemon) => {
          return (
            <div
              key={pokemon.id}
              style={{
                border: '1px solid white',
                borderRadius: '10px',
                margin: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h4>{pokemon.name}</h4>
            </div>
          )
        })}
    </div>
  )
}

export default CatalogOfPokemons