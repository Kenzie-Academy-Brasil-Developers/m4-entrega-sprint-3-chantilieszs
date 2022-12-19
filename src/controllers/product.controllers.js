import { createProductService } from "../services/product/createProduct"
import { deleteProductService } from "../services/product/deleteProduct";
import { listProductByIDService } from "../services/product/listProductByID";
import { listProductsService } from "../services/product/listProducts";
import { productsByCategoryIDService } from "../services/product/productsByCategoryID";
import { updateProductService } from "../services/product/updateProduct";

export const createProductController = async (request, response) => {
   
    const createdProduct = await createProductService(request.validatedBody);

    return response.status(201).json(createdProduct)  
    
}

export const listProductsController = async (request, response) => {
    try {
        const listProducts = await listProductsService();
        
        return response.status(200).json(listProducts)
    } catch (error) {
        return response.status(400).json({
            message: error
        })
    }
}

export const listProductByIDController = async (request, response) => {
   
    try {
        const product = await listProductByIDService(request.params.id)
        
        return response.status(200).json(product);
    } catch (error) {
        return response.status(400).json({
            message: error
        })
    }
}

export const updateProductController = async (request, response) => {
    const nome = request.body.nome
    const price = request.body.price
    const id = request.params.id
    
    const [status, data] = await updateProductService(nome, price, id);

    return response.status(status).json(data)
}

export const deleteProductController = async (request, response) => {
    
    const message = await deleteProductService(request.params.id)
    
    return response.status(204).json(message)
}

export const productsByCategoryIDController = async (request, response) => {
    const [status, message] = await productsByCategoryIDService(request.params.id)

    return response.status(status).json(message)
}