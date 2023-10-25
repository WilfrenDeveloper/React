import { useEffect, useState } from 'react'
import axios from 'axios'
import CardCountry from './components/CardCountry'


function App() {
  const [countries, setCountries] = useState()

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/name/colombia'
    axios.get(url)
      .then(res => setCountries(res.data))
      .catch(error => console.log(error))
  }, [])
 

  return (
    <div>
      <h1>Peticiones asíncronas</h1>
      <CardCountry
        countries = {countries}
      />
    </div>
  )
}

export default App
