import "express-async-errors";
import express from "express";
import categoryRoutes from "./routers/category.routes";
import productRoutes from "./routers/products.routes";
import { errorHandler } from "./errors";

const app = express();

app.use(express.json());

app.use("/categories", categoryRoutes)
app.use("/products", productRoutes)

app.use(errorHandler);

export default app;
