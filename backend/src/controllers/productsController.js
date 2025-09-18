import productos from "../data/products.js"; 

const getAllProducts = async (req, res) => {
  console.log("Todos los productos:", productos);
  res.json({ productos });
};

const getProduct = async (req, res, next) => {
  const id = Number(req.params.id);
  const product = productos.find(p => p.id === id);

  if (product) {
    res.json({ product });
  } else {
    const error = new Error("Producto no encontrado");
    error.status = 404;
    return next(error);
  }

  console.log("Producto solicitado:", id);
};

export { getAllProducts, getProduct };
