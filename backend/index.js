import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import corsOptions from "./src/config/corsConfig.js";

import productsRouter from "./src/routes/productsRouter.js";
import printConsole from "./src/middleware/printConsole.js";
import errorHandler from "./src/helpers/errorHandler.js";

const app = express();
app.use(cors(corsOptions));
dotenv.config({ quiet: true });

const PORT = process.env.PORT || 5000;

app.use(printConsole);

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("¡Bienvenido al API de Mueblería Jota!");
});

app.use("/api/productos", productsRouter);

app.use((req, res, next) => {
  const error = new Error(`Ruta no encontrada: ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
