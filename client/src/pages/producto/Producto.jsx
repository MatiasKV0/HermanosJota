import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import "./producto.css";

export default function Producto() {
  const { id } = useParams();
  const { cart, addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [disponible, setDisponible] = useState(true);
  const [response, setResponse] = useState(null);
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const urlImg = import.meta.env.VITE_BACKEND_URL_IMG || "http://localhost:5000/uploads";

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}/api/productos/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const p = data.product ?? data;
        if (alive) {
          setProduct(p);
          setResponse(null);
        }
      } catch (e) {
        if (alive) setResponse("Ocurrió un error: " + e.message);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [id, url]);

  useEffect(() => {
    const productoEnCarrito = cart.find((p) => p.id === Number(id));
    const cantidadActual = productoEnCarrito ? productoEnCarrito.quantity : 0;
    if (qty === "" || (cantidadActual + qty === 99 && qty === 0)) {
      setDisponible(false);
    }
    else {
      setDisponible(cantidadActual + qty <= 99);
    }
  }, [cart, qty, id]);

  if (loading)
    return (
      <p className="msg">Cargando...</p>
    );

  if (response)
    return (
      <p className="msg">{response}</p>
    );

  if (!product)
    return (
      <p className="msg">Producto no encontrado.</p>
    );

  const { nombre, atributos, precio, descripcion, imagen } = product;

  const handleClick = () => {
    addToCart(product.id, qty);
    navigate("/carrito");
  };

  return (
    <main className="producto">
      <section className="producto">
        <div className="producto__media">
          <figure className="producto__figure">
            <img
              id="p-img"
              src={`${urlImg}${imagen}`}
              alt="Imagen del producto"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="producto__info">
          <h1 id="p-nombre" className="producto__titulo">{nombre}</h1>

          <div className="producto__panel">
            <p id="p-descripcion" className="producto__descripcion">{descripcion}</p>
          </div>

          <div className="producto__cantidad">
            <div className="producto__precio">
              <span id="p-available" style={{ color: disponible ? "var(--colorsecundario)" : "var(--colorprimario)" }}>
                {disponible ? "Stock disponible" : "Stock no disponible"}
              </span>
              <h2 id="p-price">${Number(precio)?.toLocaleString("es-AR")}</h2>
            </div>

            <div className="cantidad__control">
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                value={qty}
                min="0"
                max="99"
                className="cantidad-input"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setQty(Number(value));
                  }
                }}
              />
              <button
                id="carrito"
                className="btn btn--primario"
                onClick={() => handleClick(Number(qty))}
                disabled={!disponible || Number(qty) === 0 || qty === ""}
              >
                Añadir al carrito
              </button>
            </div>
          </div>

          <div className="producto__panel">
            <dl id="p-atributos" className="atributos">
              {atributos &&
                Object.entries(atributos).map(([k, v]) => (
                  <div key={k} className="atributo__item">
                    <dt className="atributo__key">{k}</dt>
                    <dd className="atributo__value">{v}</dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
