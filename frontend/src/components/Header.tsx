import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/meditations" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Meditations
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Gallery
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
