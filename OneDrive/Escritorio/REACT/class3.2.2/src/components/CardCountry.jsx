import React from 'react'

const CardCountry = ({ country }) => {



  return (
    <div>
        <img src={country.flags.png} alt="bandera" />
        <h2>{country.name.common}</h2>
        <ul>
            <li><span>Capital:</span> {country.capital}</li>
            <li><span>Habitantes:</span> {country.population}</li>
            <li><span>Región:</span> {country.region}</li>
        </ul>

    </div>
  )
}

export default CardCountry