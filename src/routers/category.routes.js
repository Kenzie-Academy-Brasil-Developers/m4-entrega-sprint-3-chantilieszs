import { Router } from "express";
import { createCategoryController, deleteCategoryController, listCategoryByIDController, listCategoryController, updateCategoryController } from "../controllers/category.controller";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import createCategorySerializer from "../serializers/category/serializers";



const categoryRoutes = Router();

categoryRoutes.post("", ensureDataIsValid(createCategorySerializer), createCategoryController)
categoryRoutes.get("", listCategoryController)
categoryRoutes.get("/:id", listCategoryByIDController)
categoryRoutes.patch("/:id", updateCategoryController)
categoryRoutes.delete("/:id", deleteCategoryController)

export default categoryRoutes;