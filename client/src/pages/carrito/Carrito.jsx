import './carrito.css'

export default function Carrito() {
    return (
        <main className="carrito">
            <h1 className="carrito">Tu Carrito</h1>
            <p class="cart-intro">
              Cada pieza seleccionada es una inversión en la belleza y funcionalidad
              de tu hogar
            </p>
            <section class="cart-container">
              <div class="cart-items" id="cart-items">
              </div>
              <div class="cart-summary none">
                <h3>¿Listo para el siguiente paso?</h3>
                <p>
                  Contactanos para recibir una cotización personalizada y coordinar
                  los detalles de tu pedido
                </p>
                <button class="checkout" id="cotizar" onclick="cotizarProductos()">
                  Solicitar Cotización
                </button>
              </div>
              <div>
                <p class="empty-cart">
                  Tu carrito está vacío. Explora nuestros productos y agrega tus
                  favoritos.
                </p>
              </div>
            </section>
            <section class="more-products">
              <h2>También te puede interesar</h2>
              <div class="products-container" id="products-container">
                <p>Error al cargar los productos.</p>
              </div>
            </section>
        </main>
    )
}