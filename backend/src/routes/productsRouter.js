import express from "express";

import {
  getAllProducts,
  getProduct
} from "../controllers/productsController.js";

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/:id", getProduct);
export default productsRouter;
