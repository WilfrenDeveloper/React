import './App.css'
import CardMovie from './components/CardMovie.jsx'

function App() {

  const person = {
    name: 'Wilfren',
    age: 24,
    favoriteMovie: 'Guerra Mundial Z',
    favoriteMusic: 'Cristiana'
  }

  return (
    <div className='div'>
      <ul className='div__ul'>
        <li className='div__li'>
          <span className='div__span'>Nombre:</span> {person.name}.
        </li>
        <li>
          <span className='div__span'>Edad:</span> {person.age} años.
        </li>
        <li>
          <span className='div__span'>Película favorita:</span> {person.favoriteMovie}.
        </li>
        <li>
          <span className='div__span'>Música Favorita:</span> {person.favoriteMusic}.
        </li>
      </ul>


      <CardMovie
        h2='Hobbies'
        li1="Música"
        li2='Ir a la playa'
        li3='Videojuegos'
        li4='Películas'
        bgc='blue'
      />

      <CardMovie
        h2='Mi comida favorita'
        li1="Arroz con leche"
        li2='tacos mexicanos'
        li3='frijoles con arroz'
        li4='tamales'
        bgc='darkred'
      />

      <CardMovie
        h2='Mi stack tech'
        li1="HTML"
        li2='CSS'
        li3='React'
        li4='Javascript'
        bgc='darkgreen'
      />


    </div>
  )
}

export default App
