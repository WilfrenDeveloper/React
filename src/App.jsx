import { useEffect, useState } from "react"
import axios from 'axios'


function App() {
  
  const [user, setUser] = useState()

  
  useEffect(() => {
    const url = 'https://randomuser.me/api/'

    axios.get(url)
      .then(res => setUser(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>useEffect y Asincronismo</h1>
    </div>
  )
}

export default App
