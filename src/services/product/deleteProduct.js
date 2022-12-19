import database from "../../database";
import AppError from "../../errors";

export const deleteProductService = async (id) => {

    const findID = await database.query(`
        SELECT
            *
        FROM
            products
        WHERE
            id = $1;
        `,
        [id]
    );
    if (findID.rowCount <= 0) {
        throw new AppError('Product not found', 404)
    }
    await database.query(`
        DELETE FROM
            products
        WHERE
            id = $1 
        `,
        [id]
    )

    return {}
}