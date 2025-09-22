import productos from "../data/products.js";

const getAllProducts = async (req, res) => {
  console.log("Productos:", productos);
  res.json({
    total: productos.length,
    productos,
  });
};

const getProduct = async (req, res, next) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    const error = new Error("ID inválido");
    error.status = 400;
    return next(error);
  }

  const product = productos.find((p) => p.id === id);

  if (!product) {
    const error = new Error("Producto no encontrado");
    error.status = 404;
    return next(error);
  }

  console.log("Producto solicitado:", id);
  res.json({ product });
};

export { getAllProducts, getProduct };
