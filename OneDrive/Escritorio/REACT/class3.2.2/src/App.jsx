
import { useEffect, useRef, useState } from 'react'
import useFetch from './hooks/useFetch'
import CardCountry from './components/CardCountry'


function App() {

  const [language, setLanguage] = useState('spanish')

  const url = `https://restcountries.com/v3.1/lang/${language}`

  const [countries, getCountries, isLoading, hasError] = useFetch(url)


  useEffect(() => {
    getCountries()
  }, [language])

  const inputLanguage = useRef()



  const handleSubmit = e => {
    e.preventDefault()
    setLanguage(inputLanguage.current.value.toLowerCase().trim())
    inputLanguage.current.value = ""
  }



  return (
    <div>
      <h1>despliegue dinámico 2</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputLanguage} />
        <button>Language</button>
      </form>
      {
        isLoading
          ? <h2>Loading...</h2>
          : hasError
            ? <h2>Language not founf - ❌ 404</h2>
            : (countries?.map(country => (
              <CardCountry
                key={country.area}
                country={country}
              />
            )))
      }
    </div>
  )
}

export default App
