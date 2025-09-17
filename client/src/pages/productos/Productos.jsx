import './productos.css'

export default function productos() {
    return (
        <main className="productos">
            <div class="layout">
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
            </ul>
          </nav>
        </aside>
        <section>
          <div>
            <h1>Productos</h1>
            <div id="container"></div>
          </div>
        </section>
      </div>
    </main>
    )
}