import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
  const [infoApi, setInfoApi] = useState()

  const getApi = () => { 
    axios.get(url)
      .then(({ data }) => setInfoApi(data))
      .catch(err => console.log(err))
   }
  return [ infoApi, getApi]
}

export default useFetch