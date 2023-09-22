import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const PokedexPage = () => {

  const trainer = useSelector(store => store.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  const [ pokemons, getPokemons] = useFetch(url)

  useEffect(() => {
    getPokemons()
  }, [])
  

  return (
    <div>
      <p>Hi {trainer}</p>
      <div>
        {
          pokemons?.results.map(poke => {
            <PokeCard 
              key={poke.url}
              url={poke.url}
            />
          })
        }
      </div>
    </div>
  )
}

export default PokedexPage