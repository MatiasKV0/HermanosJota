import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./producto.css";

export default function Producto() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [qty, setQty] = useState(1);

  const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

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
        if (alive) {
          setResponse("Ocurrió un error: " + e.message);
        }
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [id, url]);

  if (loading)
    return (
      <main className="producto">
        <p>Cargando...</p>
      </main>
    );
  if (response) {
    return (
      <main className="producto">
        <p>{response}</p>
      </main>
    );
  }
  if (!product)
    return (
      <main className="producto">
        <p>No se encontró el producto.</p>
      </main>
    );

  const nombre = product.nombre;
  const atributos = product.atributos;
  const precio = product.precio;
  const descripcion = product.descripcion;
  const imagen = product.imagen;

  return (
    <main className="producto">
      <section className="producto">
        <div className="producto__media">
          <figure className="producto__figure">
            <img
              id="p-img"
              src={`${url}/${imagen}`}
              alt="Imagen del producto"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="producto__info">
          <h1 id="p-nombre" className="producto__titulo">
            {nombre}
          </h1>

          <div className="producto__panel">
            <p id="p-descripcion" className="producto__descripcion">
              {descripcion}
            </p>
          </div>

          <div className="producto__cantidad">
            <h2>
              <span id="p-price">Precio: </span> $
              {Number(precio)?.toLocaleString("es-AR")}
            </h2>
            <div className="cantidad__control">
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                value={qty}
                min="1"
                max="10"
                className="cantidad-input"
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              />
              <button
                id="carrito"
                className="btn btn--primario"
                onClick={() => alert(`Agregado "${nombre}" x ${qty}`)}
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
