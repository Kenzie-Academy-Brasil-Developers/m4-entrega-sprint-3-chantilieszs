import * as yup from "yup";

const createCategorySerializer = yup.object().shape({
    name: yup.string().max(45).required()
});




export default createCategorySerializer;