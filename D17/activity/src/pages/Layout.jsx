import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/Navbar"

const TeamLayout = () => {
  return (
    <>
        <header>
            <NavbarComponent/>
        </header>
        <main>
          <div className="container py-5">
            <Outlet />
          </div>
        </main>
    </>
  )
}

export default TeamLayout;