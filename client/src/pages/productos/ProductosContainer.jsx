import { useEffect, useState } from "react";
import ProductosRender from "./ProductosRender";

export default function ProductosContainer() {
  const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [textoBusqueda, setTextoBusqueda] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData([]);
        window.scrollTo(0, 0);

        const res = await fetch(`${url}/api/productos`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

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

  // Filtrar por categoría y texto
  const productosFiltrados = data.filter((p) => {
    const coincideCategoria =
      !categoriaSeleccionada || p.categoria === categoriaSeleccionada;
    const coincideTexto =
      textoBusqueda.trim() === "" ||
      p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());

    return coincideCategoria && coincideTexto;
  });

  return (
    <ProductosRender
      url={url}
      data={productosFiltrados || []}
      loading={loading}
      response={response}
      categoriaSeleccionada={categoriaSeleccionada}
      setCategoriaSeleccionada={setCategoriaSeleccionada}
      textoBusqueda={textoBusqueda}
      setTextoBusqueda={setTextoBusqueda}
    />
  );
}
