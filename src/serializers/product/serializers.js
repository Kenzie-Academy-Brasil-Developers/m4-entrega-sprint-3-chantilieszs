import * as yup from "yup";

const createProductSerializer = yup.object().shape({
    name: yup.string().max(45).required(),
    price: yup.string().required(),
    category_id: yup.number().required()
});




export default createProductSerializer;