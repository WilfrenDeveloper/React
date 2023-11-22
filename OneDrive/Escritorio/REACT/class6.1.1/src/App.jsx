import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCountriesThunk } from './assets/store/slices/countries.slice'

function App() {
  const [count, setCount] = useState(0)

  const countries = useSelector(store => store.countries)

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/lang/spanish'
    dispatch(getCountriesThunk(url))
  }, [])
  

  console.log(countries);

  return (
    <>
      <h1>Reux thunks</h1>
    </>
  )
}

export default App
