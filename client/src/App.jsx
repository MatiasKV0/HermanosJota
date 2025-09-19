import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Contacto from "./pages/contacto/Contacto";
import Productos from "./pages/productos/Productos";
import Producto from "./pages/producto/Producto";
import Carrito from "./pages/carrito/Carrito";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
