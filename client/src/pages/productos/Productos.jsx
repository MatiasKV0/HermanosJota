import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./productos.css";

export default function Productos() {
  const url = import.meta.env.BACKEND_URL || "http://localhost:5000";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData([]);
        window.scrollTo(0, 0);

        const res = await fetch(`${url}/api/productos`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const results = await res.json();
        const productos = Array.isArray(results)
          ? results
          : results.productos || [];

        setData(productos);
        setLoading(false);
      } catch (error) {
        setResponse("Ocurrió un error: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <main className="productos">
      <div className="layout">
        <aside>
          <form>
            <input type="search" placeholder="Buscar..." />
          </form>
          <nav>
            <ul>
              <li>SILLAS</li>
              <li>SILLONES</li>
              <li>MESAS</li>
              <li>ESCRITORIOS</li>
              <li>BIBLIOTECAS</li>
              <li>CAMAS</li>
            </ul>
          </nav>
        </aside>

        <section>
          <div>
            <h1>Productos</h1>
            <div
              id="container"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              {loading && <p>Cargando productos...</p>}
              {response && <p>{response}</p>}
              {!loading && !response && data.length === 0 && (
                <p>No hay productos para mostrar.</p>
              )}
              {!loading &&
                !response &&
                data.map((p) => {
                  return (
                    <Link
                      key={p.id}
                      to={`/producto/${p.id}`}
                      style={{ display: "block", width: "200px" }}
                    >
                      <img
                        src={`${url}/${p.imagen}`}
                        alt={p.nombre}
                        loading="lazy"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <p style={{ margin: ".5rem 0 0" }}>{p.nombre}</p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
