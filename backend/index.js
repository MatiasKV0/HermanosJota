import express, { json } from 'express';

import productsRouter from './src/routes/productsRouter.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/productos',productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});