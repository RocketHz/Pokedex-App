import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ url }) => {

  const [ pokemon, getPokemon] = useFetch(url)

  
  useEffect(() => {
    getPokemon()
  }, [])
  
  const navigate = useNavigate()
  
  const handleNavigate = () => { 
    navigate(`/pokedex/:${pokemon.id}`)
   }


  return (
    <article className='poke_card' onClick={handleNavigate}>
      <div className={`poke_card_background-${pokemon?.types[0].type.name.toLowerCase()}`}></div>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section>
        <h3 className='poke_name'>{pokemon?.name}</h3>
        <ul className='poke_type'>
          {
            pokemon?.types.map(typeInfo => {
              const typeColor = typeInfo.type.name.toLowerCase();
              return (
              <li className={`${typeColor}`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
            )})
          }
        </ul>
        <hr />
        <ul className='poke_stats_container'>
          {
            pokemon?.stats.map(statInfo => (
              <li className='poke_stats_content' key={statInfo.stat.url}>
                <span className='poke_stats_name'>{statInfo.stat.name}</span><span className='poke_stats_base'>{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
        <button className={`poke_details ${pokemon?.types.map(typeInfo => typeInfo.type.name.toLowerCase())[0]}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.89 9.55004C19.8069 9.38513 19.6798 9.24645 19.5227 9.14937C19.3656 9.05229 19.1847 9.0006 19 9.00004H14V3.00004C14.0107 2.78073 13.949 2.56397 13.8243 2.38324C13.6996 2.20251 13.5189 2.06785 13.31 2.00004C13.1092 1.93399 12.8927 1.93324 12.6915 1.99792C12.4903 2.0626 12.3147 2.18937 12.19 2.36004L4.19001 13.36C4.08978 13.5049 4.02959 13.6737 4.01554 13.8493C4.0015 14.0249 4.03409 14.2011 4.11001 14.36C4.17994 14.5418 4.3014 14.6992 4.4595 14.8129C4.61761 14.9266 4.80546 14.9916 5.00001 15H10V21C10.0002 21.2109 10.067 21.4164 10.1909 21.587C10.3148 21.7576 10.4895 21.8847 10.69 21.95C10.7905 21.9812 10.8948 21.998 11 22C11.1578 22.0005 11.3134 21.9635 11.4542 21.8923C11.595 21.821 11.7169 21.7174 11.81 21.59L19.81 10.59C19.9178 10.4408 19.9822 10.2648 19.9964 10.0813C20.0105 9.8978 19.9737 9.71397 19.89 9.55004V9.55004ZM12 17.92V14C12 13.7348 11.8947 13.4805 11.7071 13.2929C11.5196 13.1054 11.2652 13 11 13H7.00001L12 6.08004V10C12 10.2653 12.1054 10.5196 12.2929 10.7071C12.4804 10.8947 12.7348 11 13 11H17L12 17.92Z" fill="white"></path></svg>More Details</button>
      </section>
    </article>
  )
}

export default PokeCard