import database from "../../database"
import AppError from "../../errors"

export const createCategoryService = async (data) => {
    
        const findCategory = await database.query(`
            SELECT
                *
            FROM
                categories
            WHERE
                name = $1;
            `,
            [data.name]
        )
        if (findCategory.rowCount > 0) {
            throw new AppError('Category already exists', 400)
        }
        const queryResponse = await database.query(
            `INSERT INTO
                categories (name)-
            VALUES
                ($1)
            RETURNING *;
            `,
            [data.name]
        )

        return  queryResponse.rows
    


}