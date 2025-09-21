import { Link } from "react-router-dom";
import "./home.css";

export default function home() {
  return (
    <main className="home">
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
          src="public/img/AparadorUspallata.png"
          alt="Aparador artesanal Hermanos Jota"
          className="hero-img"
        />
      </section>

      <section id="destacados" className="destacados">
        <h2>Piezas Destacadas</h2>
        <div className="destacados-content"></div>
        <Link to="/productos" className="btn-secondary">
          Explorar más creaciones
        </Link>
      </section>

      <section id="about" className="about-us">
        <h2>Nuestra Historia</h2>
        <p>
          Existimos en la intersección entre herencia e innovación, donde la
          calidez del optimismo de los años 60 se encuentra con la conciencia de
          la sustentabilidad del 2025. Cada pieza que creamos no solo sirve una
          función, sino que alimenta el alma, honrando el pasado mientras abraza
          el futuro.
        </p>

        <h2>Compromiso de Longevidad</h2>
        <div className="cards">
          <div className="card">
            <h3>Garantía extendida</h3>
            <p>10 años en estructura, 5 años en acabados</p>
          </div>
          <div className="card">
            <h3>Servicio de restauración</h3>
            <p>Recuperamos y renovamos piezas antiguas</p>
          </div>
          <div className="card">
            <h3>Taller de cuidados</h3>
            <p>Capacitación gratuita para clientes</p>
          </div>
          <div className="card">
            <h3>Recompra garantizada</h3>
            <p>Hasta 40% del valor en piezas bien cuidadas</p>
          </div>
          <div className="card">
            <h3>Certificado de trazabilidad</h3>
            <p>Origen de cada material utilizado</p>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews">
        <h2>Voces de Nuestra Comunidad</h2>
        <div className="reviews-content">
          <blockquote>
            <p>
              Cada pieza envejece con gracia, desarrollando carácter mientras
              mantiene su belleza esencial.
            </p>
            <cite>— María P.</cite>
          </blockquote>
          <blockquote>
            <p>
              La calidez y la intencionalidad se sienten desde el primer
              momento. Arte que funciona.
            </p>
            <cite>— Juan L.</cite>
          </blockquote>
        </div>
        <Link to="/contacto" className="btn-secondary">
          Déjanos tu opinión
        </Link>
      </section>
    </main>
  );
}
