import productos from "../data/products.js"; 

const getAllProducts = async (req, res) => {
  console.log("Todos los productos:", productos);
  res.json({ productos });
};

const getProduct = async (req, res) => {
  const id = Number(req.params.id);
  const product = productos.find(p => p.id === id);

  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }

  console.log("Producto solicitado:", id);
};

export { getAllProducts, getProduct };
