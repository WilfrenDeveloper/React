//import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import UserCard from './components/UserCard'
import useFetch from './hooks/useFetch'

function App() {

  //const [users, setUsers] = useState()
  const [inputUsers, setInputUsers] = useState(10)

  const url = `https://randomuser.me/api/?results=${inputUsers}`

  const [users, getUsers] = useFetch(url)


  useEffect(() => {

    getUsers()

  }, [inputUsers])

  const numberUsers = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputUsers(numberUsers.current.value.trim())
    numberUsers.current.value = ""
  }

  

  return (
    <>
      <h1>Despliegue Dinámico</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='cantidad de usuarios' ref={numberUsers}/>
        <button>Search</button>
      </form>
      {
        users?.results.map(user => (
          <UserCard
            key={user.email}
            user={user}
          />
        ))
      }
    </>
  )
}

export default App
