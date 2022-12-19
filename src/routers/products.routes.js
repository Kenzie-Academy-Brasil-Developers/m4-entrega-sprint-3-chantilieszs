import { Router } from "express";
import { createProductController, deleteProductController, listProductByIDController, listProductsController, productsByCategoryIDController, updateProductController } from "../controllers/product.controllers";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import createProductSerializer from "../serializers/product/serializers";


const productRoutes = Router();

productRoutes.post("", ensureDataIsValid(createProductSerializer), createProductController)
productRoutes.get("", listProductsController)
productRoutes.get("/:id", listProductByIDController)
productRoutes.patch("/:id", updateProductController)
productRoutes.delete("/:id", deleteProductController)
productRoutes.get("/category/:id", productsByCategoryIDController)


export default productRoutes;