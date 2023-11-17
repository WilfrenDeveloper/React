import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NavBar from './components/shared/NavBar'
import UsersPage from './pages/UsersPage'
import NavBarPages from './pages/NavBarPages'
import { useState } from 'react'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })

  console.log(formValues)

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage setFormValues={setFormValues} />} />
        <Route element={<ProtectedRoutes {...formValues} />}>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
        <Route path='/users/:quantity' element={<UsersPage />} />
        <Route path='*' element={<h3>❌ Error 404 - This route does not exist 😵</h3>} />
      </Routes>
    </div>
  )
}

export default App
