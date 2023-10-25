import { useEffect, useState } from 'react'
import UserCard from './components/UserCard'
import axios from 'axios'


function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const url = 'https://randomuser.me/api/'
    axios.get(url)
      .then(res=>setUser(res.data))
      .catch(error=>console.log(error))
  }, [])

console.log(user);

  return (
    <div>
      <h1>Peticiones asincrónicas</h1>
      <UserCard
        user = {user}
      />
    </div>
  )
}

export default App
