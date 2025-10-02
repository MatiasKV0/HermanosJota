import DestacadosFetch from "../../components/DestacadosFetch";

import "./carrito.css";

export default function Carrito() {
  return (
    <main className="cart">
      <h1>Tu Carrito</h1>
      <p className="cart-intro">
        Cada pieza seleccionada es una inversión en la belleza y funcionalidad
        de tu hogar
      </p>
      <section className="cart-container">
        <div className="cart-items" id="cart-items"></div>
        <div className="cart-summary none">
          <h3>¿Listo para el siguiente paso?</h3>
          <p>
            Contactanos para recibir una cotización personalizada y coordinar
            los detalles de tu pedido
          </p>
          <button
            className="checkout"
            id="cotizar"
            onClick={()=>cotizarProductos()}
          >
            Solicitar Cotización
          </button>
        </div>
        <div>
          <h2 className="empty-cart">
            El carrito está vacío.
          </h2>
        </div>
      </section>
      <section className="more-products">
        <h2>También te puede interesar</h2>
        <div className="products-container" id="products-container">
          <DestacadosFetch/>
        </div>
      </section>
    </main>
  );
}
