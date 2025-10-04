import DestacadosFetch from "../../components/DestacadosFetch";
import "./carrito.css";

import { useState } from "react";

export default function Carrito({ cart, removeFromCart, clearCart }) {
  const [success, setSuccess] = useState(false);

  const handleCotizar = () => {
    clearCart();
    setSuccess(true);
  };

  return (
    <main className="cart">
      <h1>Tu Carrito</h1>
      <p className="cart-intro">
        Cada pieza seleccionada es una inversión en la belleza y funcionalidad
        de tu hogar
      </p>
      <section className="cart-container">
        <div className="cart-items" id="cart-items">
          {success ? (
            <h2 className="success-message">Solicitud realizada con éxito</h2>
          ) : cart.length === 0 ? (
            <h2 className="empty-cart">El carrito está vacío.</h2>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-product">
                  <span>{item.nombre || item.name} </span>
                  <span>({item.quantity}) </span>
                  <span>
                    ~ Precio: ${Number(item.precio).toLocaleString("es-AR")}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cart.length > 0 && !success && (
          <div className="cart-summary">
            <h3>¿Listo para el siguiente paso?</h3>
            <p>
              Contactanos para recibir una cotización personalizada y coordinar
              los detalles de tu pedido
            </p>
            <button className="checkout" id="cotizar" onClick={handleCotizar}>
              Solicitar Cotización
            </button>
          </div>
        )}
      </section>
      <section className="more-products">
        <h2>También te puede interesar</h2>
        <div className="products-container" id="products-container">
          <DestacadosFetch />
        </div>
      </section>
    </main>
  );
}
