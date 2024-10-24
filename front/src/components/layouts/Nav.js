import { Link } from "react-router-dom";
import "../../styles/components/layouts/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/SobreNosotros"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Sobre nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Novedades"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Contacto"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
