import './producto.css'

export default function Producto() {
    return (
        <main classNameName="producto">
            <section className="producto">
        
        <div className="producto__media">
          <figure className="producto__figure">
            <img id="p-img" src="" alt="Imagen del producto" />
          </figure>
        </div>

        <div className="producto__info">
          <h1 id="p-nombre" className="producto__titulo"></h1>

          <div className="producto__panel">
            <p id="p-descripcion" className="producto__descripcion"></p>
          </div>

          <div className="producto__cantidad">
            <h2 span="p-price"> Precio : </h2> 
            <div className="cantidad__control">
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                value="1"
                min="1"
                max="10"
                className="cantidad-input"
              />
              <button id="carrito" className="btn btn--primario">
                Añadir al carrito
              </button>
            </div>
          </div>

          <div className="producto__panel">
            <dl id="p-atributos" className="atributos"></dl>
          </div>
        </div>
      </section>
    </main>
    )
}