import database from "../../database";

export const updateProductService = async (name, price, id) => {
    
    const queryResponse = await database.query(`
        UPDATE 
	        products 
        SET
	        name = $1, price =$2
        WHERE 
	        id = $3
        RETURNING *;
    `,
        [name, price, id]
    );
    

    return [200, queryResponse.rows[0]]
}