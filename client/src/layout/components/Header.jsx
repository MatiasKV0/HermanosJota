import './header.css'

export default function Header()    {
    return (
        <header className="header">
            <link to="index.html">
            <img src="public/img/logo.svg" alt="Mueblería Hermanos Jota Logo" />
          </link>
          <nav>
            <ul>
              <li><link to="index.html">Inicio</link></li>
              <li><link to="productos/productos.html">Productos</link></li>
              <li><link to="contacto/contacto.html">Contacto</link></li>
            </ul>
          </nav>
          <link to="carrito/carrito.html" id="carrito-icon">
            <span id="carrito-total"></span>
            <img src="public/img/cart.svg" alt="Carrito de Compras" />
          </link>
        </header>
        )
}