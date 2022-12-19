import database from "../../database";
import AppError from "../../errors";
export const createProductService = async (data) => {

    const findProduct = await database.query(`
        SELECT
            *
        FROM
            products
        WHERE
            name = $1;
        `,
        [data.name]
    );
    if (findProduct.rowCount > 0) {
        throw new AppError('Product already exists')
    }
    const queryResponse = await database.query(`
        INSERT INTO 
	        products (name, price, category_id)
        VALUES
	        ($1, $2, $3)
        RETURNING *;
        `,
        [data.name, parseFloat(data.price), data.category_id]
    );

    return queryResponse.rows
}