import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const trainer = useSelector((store) => store.trainer);

  const inputSearch = useRef()

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url);

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons();
    } else {
      getTypePokemon(typeSelected)
    }
  }, [typeSelected]);

  const handleSearch = (e) => { 
      e.preventDefault()
      setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const pokeFiltered = pokemons?.results.filter(poke =>  poke.name.includes(inputValue))

  return (
    <div>
      <p>Hi {trainer}</p>
      <form onSubmit={handleSearch}>
        <input type="text" ref={inputSearch}/>
        <button>Search</button>
      </form>
      <SelectType setTypeSelected={setTypeSelected} />
      <div>
        {pokeFiltered?.map((poke) => (
          <PokeCard key={poke.url} url={poke.url} />
        ))}
      </div>
    </div>
  );
};

export default PokedexPage;
