import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Contacto from "./pages/contacto/Contacto";
import ProductosContainer from "./pages/productos/ProductosContainer";
import Producto from "./pages/producto/Producto";
import Carrito from "./pages/carrito/Carrito";
import "./style.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductosContainer />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
