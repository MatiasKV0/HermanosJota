function Header()    {
    return (
        <header className="header">
            <a href="index.html">
            <img src="public/img/logo.svg" alt="Mueblería Hermanos Jota Logo" />
          </a>
          <nav>
            <ul>
              <li><a href="index.html">Inicio</a></li>
              <li><a href="productos/productos.html">Productos</a></li>
              <li><a href="contacto/contacto.html">Contacto</a></li>
            </ul>
          </nav>
          <a href="carrito/carrito.html" id="carrito-icon">
            <span id="carrito-total"></span>
            <img src="public/img/cart.svg" alt="Carrito de Compras" />
          </a>
        </header>
        )
}