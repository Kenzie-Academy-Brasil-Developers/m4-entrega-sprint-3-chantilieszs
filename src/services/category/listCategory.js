import database from "../../database";

export const listCategoryService = async () => {

    const queryResponse = await database.query(`
        SELECT
            *
        FROM
            categories;
    ` )

    return queryResponse.rows
}