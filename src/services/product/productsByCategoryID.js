import database from "../../database";

export const productsByCategoryIDService = async (id) => {
    
    try {
        const queryResponse = await database.query(`
            SELECT 
                *
            FROM
                products p 
            JOIN
                categories c ON p.category_id = c.id
            WHERE
                c.id = $1;
            `,
            [id]
        )
        
        return [200, queryResponse.rows]
    } catch (error) {
        return [404, {
            message: error.detail
        }]
    }
}