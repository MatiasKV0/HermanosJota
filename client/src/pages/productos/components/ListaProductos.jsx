import { Link } from "react-router-dom";

export default function ListaProductos({ url, data, loading, response }) {
  return (
    <div
      id="productos__container"
    >
      {loading && <p className="msg">Cargando productos...</p>}
      {response && <p className="msg">{response}</p>}
      {!loading && !response && data.length === 0 && (
        <p className="msg">No hay productos para mostrar.</p>
      )}
      {!loading &&
        !response &&
        data.map((p) => (
          <Link
            key={p.id}
            to={`/producto/${p.id}`}
          >
            <img
              src={`${url}${p.imagen}`}
              alt={p.nombre}
              loading="lazy"
            />
          </Link>
        ))}
    </div>
  );
}
