import { Link } from "react-router-dom";

import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="/img/logo.svg" alt="Mueblería Hermanos Jota Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <Link to="carrito" id="carrito-icon">
        <span id="carrito-total"></span>
        <img src="/img/cart.svg" alt="Carrito de Compras" />
      </Link>
    </header>
  );
}
