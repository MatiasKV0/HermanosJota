import { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import DestacadosFetch from "../../components/DestacadosFetch";

import ItemCart from "./components/itemCart";

import "./carrito.css";

export default function Carrito() {
  const { cart, clearCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [carritoCompleto, setCarritoCompleto] = useState([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [precioTotal, setPrecioTotal] = useState(0);

  const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}/api/productos`);
        const data = await response.json();
        const lista = data.productos || data;
        setProductos(lista);
      } catch (e) {
        console.error("Error al cargar productos:", e);
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, [url]);

  useEffect(() => {
    if (productos.length > 0 && cart.length > 0) {
      const filtrado = cart
        .map((item) => {
          const prod = productos.find((p) => p.id === item.id);
          return prod ? { ...prod, quantity: item.quantity } : null;
        })
        .filter(Boolean);

      setCarritoCompleto(filtrado);

      const total = filtrado.reduce(
        (acc, p) => acc + p.precio * p.quantity,
        0
      );
      setPrecioTotal(total);
    } else {
      setCarritoCompleto([]);
      window.scrollTo(0, 0);
    }
  }, [cart, productos]);

  const handleClick = () => {
    clearCart();
    setSuccess(true);
    window.scrollTo(0, 0);
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
          {loading ? (
            <h2 className="empty-cart">Cargando carrito...</h2>
          ) : success ? (
            <h2>Pago realizado con éxito.
              Total abonado: ${precioTotal.toLocaleString("es-AR")} <br/> ¡Gracias por confiar en nosotros!</h2>
          ) : carritoCompleto.length === 0 ? (
            <h2 className="empty-cart">El carrito está vacío.</h2>
          ) : (
            <ul>
              {carritoCompleto.map((item) => (
                <ItemCart item={item} key={item.id} />
              ))}
            </ul>
          )}
        </div>

        {carritoCompleto.length > 0 && !success && (
          <div className="cart-summary">
            <h3>¿Listo para finalizar tu compra?</h3>
            <p>Total: ${precioTotal.toLocaleString("es-AR")}</p>
            <p>
              Revisa los productos de tu carrito y procede al pago de manera segura.
            </p>
            <button className="checkout" id="cotizar" onClick={handleClick}>
              Pagar Ahora
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
    </main >
  );
}
