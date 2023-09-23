import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
  const [infoApi, setInfoApi] = useState()

  const getApi = () => { 
    axios.get(url)
      .then(({ data }) => setInfoApi(data))
      .catch(err => console.log(err))
  }

  const getTypeApi = (urlType) => { 
    axios.get(urlType)
      .then(({ data }) => {
        data
        const obj = {
          results: data.pokemon.map(e => e.pokemon)
        }
        setInfoApi(obj)
      })
      .catch(err => console.log(err))
  }
  
  return [ infoApi, getApi, getTypeApi]
}

export default useFetch