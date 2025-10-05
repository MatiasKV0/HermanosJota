import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./destacadosFetch.css";
import "../pages/home/home.css";

export default function DestacadosFetch() {
  const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const urlImg = import.meta.env.VITE_BACKEND_URL_IMG || "http://localhost:5000/uploads";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData([]);

        const res = await fetch(`${url}/api/productos`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const results = await res.json();
        const productos = Array.isArray(results)
          ? results
          : results.productos || [];

        const li = Math.floor(Math.random() * (productos.length - 3));
        const sugerencias = productos.slice(li, li + 3);

        setData(sugerencias);
      } catch (error) {
        setError("Ha ocurrido un error al cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="msg">Cargando productos destacados...</p>;
  if (error) return <p className="msg">{error}</p>;
  if (!data.length) return <p className="msg">No hay productos destacados.</p>;

  return (
    <div className="destacados-content">
      {data.map((producto, index) => (
        <Link to={'/producto/'+producto.id} key={index}>
          <img src={urlImg + producto.imagen} alt={producto.nombre} />
        </Link>
      ))}
    </div>
  );
}
