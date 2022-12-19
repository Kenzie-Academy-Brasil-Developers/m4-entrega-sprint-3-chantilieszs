import database from "../../database";
import AppError from "../../errors";

export const listCategoryByIDService = async (id) => {

    const queryResponse = await database.query(`
        SELECT
            *
        FROM
            categories
        WHERE 
            ${id} = id;
    `)
    if(queryResponse.rowCount <= 0) {
        throw new AppError('Category not found', 404)
    }

    return queryResponse.rows

}