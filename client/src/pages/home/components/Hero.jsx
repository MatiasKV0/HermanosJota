import { Link } from "react-router-dom";

export default function Hero() {
  const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  return (
    <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Hermanos Jota</h1>
          <p>
            Cada pieza cuenta la historia de manos expertas y materiales nobles
          </p>
          <Link to="/productos" className="btn-primary">
            Descubrir Colección
          </Link>
        </div>
        <img
          src={url + "/uploads/AparadorUspallata.png"}
          alt="Aparador artesanal Hermanos Jota"
          className="hero-img"
        />
      </section>
  )
}
