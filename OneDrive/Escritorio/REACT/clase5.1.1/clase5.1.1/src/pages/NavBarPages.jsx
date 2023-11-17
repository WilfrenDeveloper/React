import { Outlet } from "react-router-dom"
import NavBar from "../components/shared/NavBar"

const NavBarPages = () => {
  return (
    <div>
      
      <Outlet />
    </div>
  )
}

export default NavBarPages