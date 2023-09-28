import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

const SelectType = ({ setTypeSelected }) => {

  const url = `https://pokeapi.co/api/v2/type`

  const [types, getTypes] = useFetch(url)

  useEffect(() => {
    getTypes()
  }, [])

  const handleChange = (e) => {
    setTypeSelected(e.target.value)
  }



  return (
    <div className='select_container'>
      <select className='select_content' name="" id="" onChange={handleChange}>
        <option className='select_items' value="allPokemos">All Pokemons</option>
        {
          types?.results.map(typeInfo => {
            const typeColor = typeInfo.name.toLowerCase();
            return (
              <option
                className={`select_items ${typeColor}`}
                key={typeInfo.url}
                value={typeInfo.url}
              >
                {typeInfo.name}
              </option>
            );
          })
        }
      </select>
    </div>
  )
}

export default SelectType