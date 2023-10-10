import { NavLink } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-layout">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/landingpage">LandingPage</NavLink>
        </nav>
        {/* <NavLink to='help'>Help</NavLink>
        <NavLink to='careers'>Careers</NavLink> */}
    </div>
  )
}
