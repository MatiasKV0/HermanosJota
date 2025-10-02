import { Link } from "react-router-dom"
import DestacadosFetch from "../../../components/DestacadosFetch"

export default function Destacados() {
  return (
    <section id="destacados" className="destacados">
      <h2>Piezas Destacadas</h2>
      
      <DestacadosFetch />
  
      <Link to="/productos" className="btn-secondary">
        Explorar más creaciones
      </Link>
    </section>
  )
}
