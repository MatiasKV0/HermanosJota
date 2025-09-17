function productos() {
    return (
        <main className="producto">
            <section class="producto">
        
        <div class="producto__media">
          <figure class="producto__figure">
            <img id="p-img" src="" alt="Imagen del producto" />
          </figure>
        </div>

        <div class="producto__info">
          <h1 id="p-nombre" class="producto__titulo"></h1>

          <div class="producto__panel">
            <p id="p-descripcion" class="producto__descripcion"></p>
          </div>

          <div class="producto__cantidad">
            <h2 span="p-price"> Precio : </h2> 
            <div class="cantidad__control">
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                value="1"
                min="1"
                max="10"
                class="cantidad-input"
              />
              <button id="carrito" class="btn btn--primario">
                Añadir al carrito
              </button>
            </div>
          </div>

          <div class="producto__panel">
            <dl id="p-atributos" class="atributos"></dl>
          </div>
        </div>
      </section>
    </main>
    )
}