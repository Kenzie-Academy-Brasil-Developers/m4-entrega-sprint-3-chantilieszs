import { createCategoryService } from "../services/category/createCategory";
import { deleteCategoryService } from "../services/category/deleteCategory";
import { listCategoryService } from "../services/category/listCategory";
import { listCategoryByIDService } from "../services/category/listCategoryByID";
import { updateCategoryService } from "../services/category/updateCategory";

export const createCategoryController = async (request, response) => {

    const category = await createCategoryService(request.validatedBody);

    return response.status(201).json(category);
}

export const listCategoryController = async (request, response) => {
    
    const listCategories = await listCategoryService();

    return response.status(200).json(listCategories);

}

export const listCategoryByIDController = async (request, response) => {

    const category = await listCategoryByIDService(request.params.id)

    return response.status(200).json(category);
    
}

export const updateCategoryController = async (request, response) => {
    
    const updatedUser = await updateCategoryService(request.body.name, request.params.id)

    return response.status(200).json(updatedUser)
    
}

export const deleteCategoryController = async (request, response) => {
    
    const message = await deleteCategoryService(request.params.id)
    
    return response.status(204).json(message)
    
}