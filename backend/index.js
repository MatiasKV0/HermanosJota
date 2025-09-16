import express from "express";
import dotenv from 'dotenv';

import productsRouter from "./src/routes/productsRouter.js";

const app = express();
dotenv.config({quiet:true});

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/productos", productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
