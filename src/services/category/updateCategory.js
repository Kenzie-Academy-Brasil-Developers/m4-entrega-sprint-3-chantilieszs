import database from "../../database";
import AppError from "../../errors";

export const updateCategoryService = async (name, id) => {
    const findName = await database.query(`
        SELECT
            *
        FROM
            categories
        WHERE
            name = $1;
        `,
        [name]
    );
    if (findName.rowCount <= 0) {
        throw new AppError('Category not found', 404)
    }
    const findID = await database.query(`
        SELECT
            *
        FROM
            categories
        WHERE
            id = $1;
        `,
        [id]
    );
    if (findID.rowCount <= 0) {
        throw new AppError('Category not found', 404)
    }
    const queryResponse = await database.query(`
        UPDATE 
	        categories 
        SET
	        name = $1
        WHERE 
	        id = $2
        RETURNING *;
    `,
        [name, id]
    );

    return queryResponse.rows
}