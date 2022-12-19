import database from "../../database";

export const listProductByIDService = async (id) => {

    const queryResponse = await database.query(`
        SELECT
            *
        FROM
            products
        WHERE 
            id = $1;
        `,
        [id]
    )

    return queryResponse.rows

}