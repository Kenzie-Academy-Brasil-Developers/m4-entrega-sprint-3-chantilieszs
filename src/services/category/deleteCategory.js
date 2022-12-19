import database from "../../database"
import AppError from "../../errors";

export const deleteCategoryService = async (id) => {

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
    await database.query(`
        DELETE FROM
            categories
        WHERE
            id = $1 
        `,
        [id]
    )

    return {}
}