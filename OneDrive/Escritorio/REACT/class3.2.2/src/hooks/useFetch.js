import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [country, setCountry] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    
     const getApi = () => {axios.get(url)
         .then(res => {
            setCountry(res.data)
            setHasError(false)
         })
         .catch(err => {
            console.log(err)
            setHasError(true)
            })
         .finally(()=> setIsLoading(false))
     }
   
    
  return [country, getApi, isLoading, hasError]
}

export default useFetch